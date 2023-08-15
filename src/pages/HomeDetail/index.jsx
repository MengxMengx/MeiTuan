import React, { memo, useEffect, } from 'react'
import { Wrapper } from './style'
// import { NavBar } from 'antd-mobile'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
// 快捷方式 @ /src   工程化 alias 
import HomeDetailNav from '@/components/HomeDetailNav'

function HomeDetail() {
  const navigate = useNavigate()
  let { id } = useParams();
  if (!id) {
    navigate('/home');
    return;
  }

  // 如果id存在 跳转到order页面
  useEffect(() => {
    navigate(`/homedetail/${id}/order`)
  }, [])

  return (
    <Wrapper>
      <div className="order-container">
        <div style={{ height: "123.096px", position: "relative" }}>
          <div className="order-container-bg" style={{
            color: "rgb(255, 255, 255)",
            position: "relative",
            height: "100%",
            background: "linear-gradient(rgba(34, 36, 38, 0.5), rgba(34, 36, 38, 0.5)), url('https://p0.meituan.net/business/b4d136b1986be156162b0caa89e2c5a7489581.png@750w') center top / cover no-repeat"
          }}>
            <div style={{
              width: "100%",
              height: " 50px",
              position: "relative",
              touchAction: "none",
              zIndex: 1
            }}>
              <div>
                <div className="order-container-back order-container-backv2">
                  <i className="order-container-backIcon" onClick={() => navigate('/')}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="order-container-pic" style={{ paddingTop: 0 }}>
            <img src="https://p0.meituan.net/ingee/3806cebbee5cc441b1e7d66f05b40a8a2081.png" className="order-container-picv2" />
          </div>
        </div>
        <div className="order-content">
          <div className="order-contentv2">
            <div className="order-content-pic" style={{ backgroundImage: "url('https://p1.meituan.net/waimaipoi/db14de98caae48e80b0c1f99b5890cb8172770.png')" }}></div>
            <div className="order-content-txt"><div>
              <div className="order-content-storeName order-content-storeNamev2">麦当劳&麦咖啡（科苑店）</div>
              <div className="order-content-desc">
                <span className="content-desc-comment">4.7</span>
                <span className="content-desc-time">配送约35分钟</span>
              </div>
            </div>
              <div className="content-hot">
                <span>南山区汉堡复购榜第5名</span>
              </div>
            </div>
            <div className="content-bd">
              <div className="content-bdv2 content-bdv3">
                <div className="content-bd-left">
                  <span className="bd-left">
                    <span className="bd-box">
                      <span className="bd-box-icon">¥</span>
                      <span className="bd-box-number">1</span>
                    </span>
                    <span className="bd-box-txt">领</span>
                  </span>
                  <span className="bd-left" >
                    <span className="bd-box">
                      <span className="bd-box-icon">¥</span>
                      <span className="bd-box-number">3</span>
                    </span>
                    <span className="bd-box-txt">领</span>
                  </span>
                  <span className="bd-left" >
                    <span className="bd-box">
                      <span className="bd-box-icon">¥</span>
                      <span className="bd-box-number">5</span>
                    </span><span className="bd-box-txt">领</span>
                  </span>
                </div>
              </div>
              <div className="order-content-ft">
                <span className="ft-ad ft-adv2">
                  公告：【麦乐送是麦当劳统一的外送服务品牌，委托专业外送公司提供服务】
                  【外送价格和活动与堂食不同，外送不设起送价】
                  【为支持环保，我们不再主动配备吸管，您可以通过"无吸管"杯盖直接饮用】
                  【用餐问题，欢迎联系】
                  【收藏门店，惊喜相送】
                </span>
                <span className="ft-last"></span>
              </div>
              <div className="ft-last-v2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeDetailNav id={id} />
       <Outlet />
      {/* 在父组件中使用Outlet来显示匹配到的子组件 */}
    </Wrapper >
  )
}
export default memo(HomeDetail)