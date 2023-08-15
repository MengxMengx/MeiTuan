import * as actionTypes  from './constants'
import {getCitiesRequest } from '@/api/request.js'

export const changeCitiesList = (data) => ({
    type:actionTypes.CHANGE_CITIES_LIST,
    data
})

// 用于异步获取城市列表数据
export const getCitiesList = () => {
    // 使用 redux-thunk 中间件来处理异步操作
    return dispatch => {
        // 调用了 getCitiesRequest() 函数来发送异步请求
        getCitiesRequest().then(data => {
            // 创建了一个 changeCitiesList 的 action，并通过 dispatch 方法将其发送给 Redux store
            const action = changeCitiesList(data.data)
            dispatch(action)
            // console.log(action);
        })
    }
}

// 代码的目的是使用 Redux 和 Axios 进行异步数据获取
// 当调用 getCitiesList 函数时，它会触发异步请求并分发相应的 action 到 Redux store 中