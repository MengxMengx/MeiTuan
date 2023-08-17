import React, { useState, useEffect, memo, useMemo } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//  useRef  DOM 相关
//  useCallback 性能优化 
import { changeEnterLoading } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import SearchBox from '@/components/common/search-box'
import SearchContent from './SearchContent'
import {
    Container,
    EnterLoading
} from './style'

const Search = () => {
    // useNavigate() 是一个 React Router 提供的钩子函数，用于获取路由导航函数
    // 通过调用 useNavigate()，你可以将返回的 navigate 函数保存在 navigate 变量中，以便后续在代码中使用该函数进行页面导航。
    const navigate = useNavigate();

    const [query, setQuery] = useState('肯德基')
    // 创建一个state用来显示搜索界面
    const [show, setShow] = useState(true);

    useEffect(() => {
    }, [])

    // 退回首页函数
    const searchBack = () => {
        setShow(false)
    }

    // 让父子组件的query一致
    const handleQuery = (q) => {
        // console.log(q);
        setQuery(q)
    }

    return (
        // 用CSSTransiton组件添加动画效果
        <CSSTransition
            // 如果this.state.show从false变为true，则动画入场，反之out
            in={show}
            // timeout={1000} 动画执行1秒
            timeout={1000}
            // appear：默认false 加载后自动执行
            appear={true}
            classNames="fly"
            // unmountOnExit 默认false 当动画出场后在页面上移除包裹的dom节点 但是 componentWillUnmount componentDidMount等创建不会触发
            unmountOnExit
            // onExit 结束动画触发前触发
            // navigate('/') 的含义是导航到路径为 '/' 的页面
            onExit={() => {
                navigate('/')
            }}
        >

            <Container >
                {/* 搜索框 */}
                <div className="search_box_wrapper">
                    <SearchBox
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}
                    >
                    </SearchBox>
                    <SearchContent>

                    </SearchContent>
                </div>

            </Container>
        </CSSTransition>



    );
};

export default Search;