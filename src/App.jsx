import { useEffect, useState, Suspense } from 'react'
import RoutesConfig from './routes'
import { useLocation, useNavigate } from 'react-router-dom'

// 全局组件
import { getCookie } from './utils/storage'
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  // useLocation 函数是 React Router 库中的一个钩子函数，用于在 React 组件中获取当前页面的 URL 信息
  // 返回对象，包括四个属性(pathname,search,hash,state)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 初始化重定向,目的在于在组件渲染后执行初始化逻辑,根据条件进行页面导航，决定跳转到不同的页面
  const init = () => {
    // 首先判断是否存在名为 'usertoken' 的 cookie，并且其值非空
    if (getCookie('usertoken') && getCookie('usertoken').length) {
      /* 如果 'usertoken' 存在且值非空，并且当前页面路径 pathname 是 '/' 或者 'home'，则调用 navigate('/home') 进行页面导航，跳转到 / home 页面。*/
      if (pathname === '/' || pathname === '/home') navigate('/home')
    } else if (pathname === '/register') {
      // 如果 'usertoken' 不存在或值为空，且当前页面路径 pathname 是 'register'，则调用 navigate('/register') 进行页面导航，跳转到 /register 页面。
      navigate('./register');
    } else {
      navigate('./login');
    }
  }
  useEffect(init, [pathname]);

  return (
    <div className='App'>
      <Header/>
      <Suspense
        fallback={
          <div>
            {/* https://ts1.cn.mm.bing.net/th/id/R-C.6787f690985b40c296895d2776121be2?rik=buByHz9d8BpV8A&riu=http%3a%2f%2fimages.shejidaren.com%2fwp-content%2fuploads%2f2018%2f03%2f134719XeM.jpg&ehk=YE2VbL%2f%2f1Bnc5437vOQ1d92x%2bH49ca0Epo%2fLuBkYMV8%3d&risl=&pid=ImgRaw&r=0 */}
            <img src="https://img.zcool.cn/community/01241058e5c591a801219c777e33f5.gif"
              style={{ width: '200px', position: 'fixed', top: '50%', left: '50%', transform: "translate(-50%, -50%)" }} alt="" />
          </div>}>
          <RoutesConfig />
      </Suspense>   
      <Footer/>
    </div>
  )
}

export default App
