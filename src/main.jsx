import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/lib/integration/react';
// @就表示的src文件目录
import '@/styles/reset.css'
// 引入字体图标
import 'font-awesome/css/font-awesome.min.css'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Redux 库提供的 Provider 组件,用于在 React 应用程序中提供 Redux 的状态管理功能
  // store={store.store} 是通过 store 属性将 Redux 的存储对象传递给 Provider 组件。
  <Provider store={store.store}>
    {/* BrowserRouter组件用于创建一个带有历史记录管理的 React 路由器 */}
    <BrowserRouter>
      {/* PersistGate 组件，用于在应用程序加载时展示一个加载状态 */}
      <PersistGate loading={null} persistor={store.persistor}>
        {/* App是应用程序的根组件，会在 PersistGate下被渲染和挂载。*/}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
)
