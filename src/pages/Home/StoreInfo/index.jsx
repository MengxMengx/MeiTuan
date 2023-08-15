import React, { useEffect, useState, useRef, memo } from 'react'
import { Link } from 'react-router-dom'//使用link组件进行路由跳转
import { Wrapper, EnterLoading } from './style'
// 图片延迟加载
import Loading from '@/components/common/loading'
import loadingPic from '@/assets/images/loading.gif'
import { lazyload } from '@/utils'
import { InfiniteScroll } from 'antd-mobile'//使用antd-mobile的InfiniteScroll组件来实现无限滚动加载
import { mockRequest } from './data'

const StoreInfo = (props) => {
    const { restaurants, loading } = props
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)

    // 通过useEffect钩子函数延迟加载图片，并添加滚动事件监听，在滚动停止后再次执行图片的懒加载
    useEffect(() => {
        lazyload('.poilist-item-icon-pic')

    }, [])
    useEffect(() => {
        restaurants.length && setData(restaurants)
    }, [loading])

    async function loadMore() {
        const append = await mockRequest(restaurants)
        setData(val => [...val, ...append])
        setHasMore(append.length > 0)
    }

    // 首屏渲染
    // 监听页面滚动事件，延迟500毫秒后执行图片的懒加载操作，并在组件卸载时清除定时器
    useEffect(() => {
        let timer;
        window.addEventListener('scroll', function () {
            if (timer) {
                return
            }
            timer = setTimeout(() => {
                lazyload('.poilist-item-icon-pic')
                timer = null
            }, 500);

        })
        // 使用return语句返回一个清除定时器的函数。
        // 这个清除函数在组件卸载时被调用，用于清除之前设置的定时器，避免内存泄漏。
        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <Wrapper>
            <ul className='wrapper' >
                {!loading && data.map((item, index) => {
                    return (
                        <li key={item.id + index}>
                            <Link
                                className='homelist'
                                to={{
                                    pathname: `/homedetail/${item.id} `
                                }}
                            >
                                <div className="poilist-item" style={{ position: "relative" }}>
                                    <div className="poilist-item-icon">
                                        <img className="poilist-item-icon-pic" data-src={item.pic} src={loadingPic} />
                                        <div className="poilist-item-icon-poitypepic">
                                            <img className="poitype-pic" src={item.pic_icon} />
                                        </div>
                                    </div>
                                    <div className="poilist-item-info">
                                        <div className="poilist-item-info1">
                                            <div className="poilist-item-info1name">{item.name}</div>
                                        </div>
                                        <div className="poilist-item-info2">
                                            <div className="poilist-item-info2left">
                                                <span className="poi-info-txt score">{item.score}</span>
                                                <span className="poi-info-txt">{item.sales}</span>
                                                <span className="poi-info-txt">{item.average}</span>
                                            </div>

                                            <div className="poilist-item-info2right">
                                            </div>
                                        </div>
                                        <div className="poilist-item-info3">
                                            <div className="poilist-item-info3left">
                                                <span className="poi-info-txt">{item.first_send}</span>
                                                <span className="poi-info-txt no-margin-right">{item.delivery}</span>
                                            </div>
                                            <div className="poilist-item-info3right">
                                                <span className="poi-info-txt">{item.time}</span>
                                                <span className="poi-info-txt no-margin-right">{item.distance}</span>
                                            </div>
                                        </div>
                                        <div className="poilist-item-info4">
                                            <div className="poilist-item-info4item">
                                                <div className="poilist-item-info4itemtxt">
                                                    <img className="info4-item-txtlefticon" src={item.info_icon} />
                                                    <span className="info4-item-txt" style={{ color: "rgb(155, 118, 56)", backGroundColor: "rgb(255, 255, 255) " }}>{item.info_text}</span>
                                                </div>
                                            </div>
                                            <div className="poilist-item-info4item">
                                                <div className="poilist-item-info4itemtxt">
                                                    <img className="info4-item-txtlefticon" src={item.info_icon2} />
                                                    <span className="info4-item-txt" style={{ color: "rgb(255, 128, 0)", backGroundColor: "rgb(255, 255, 255)" }}>{item.info_text2}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="poilist-item-info5 more-icon-need">
                                            <div className="d_cmm-label-comp-wrap">
                                                <div className="d_sublabel-container d_multi-line">
                                                    <div className="d_sublabel-block">
                                                        <div className="d_sublabel" style={{ borderColor: "rgb(255, 217, 178)" }}>
                                                            <div className="d_lb-wrap">
                                                                <div className="d_lb" style={{ color: "rgb(255, 128, 0)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc1}<span>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d_sublabel" style={{ borderColor: "rgb(255, 198, 193) " }}>
                                                            <div className="d_lb-wrap">
                                                                <div className="d_lb" style={{ color: "rgb(255, 74, 38)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc2}<span>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d_sublabel" style={{ borderColor: "rgb(255, 198, 193)" }}>
                                                            <div className="d_lb-wrap">
                                                                <div className="d_lb" style={{ color: "rgb(255, 74, 38)", backGroundColor: "rgb(255, 255, 255)" }}>{item.desc3}
                                                                    <span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })
                }
                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </ul>
            {
                loading ?
                    <EnterLoading>
                        <Loading></Loading>
                    </EnterLoading> : null
            }

        </Wrapper>

    )
}


export default memo(StoreInfo)
