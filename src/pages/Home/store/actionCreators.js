import * as actionTypes from './constants'
import { getBannersRequest, getRestaurantsRequest } from '@/api/request.js'

// 创建action对象，表示修改广告横幅的动作
export const changeBannersList = (data) => ({
    type: actionTypes.GET_BANNERS_LIST,
    data
})

// 创建action对象，表示修改全部商家列表的动作
export const changeRestaurantsList = (data) => ({
    type: actionTypes.GET_RESTAURANTS_LIST,
    data
})

// 创建action对象，表示修改加载状态的动作
export const changeLoading = (data) => ({
    type: actionTypes.GET_LOADING,
    data
})

// 创建action对象，用于分发action到redux store
export const getBannersList = () => {
    return (dispatch) => {
        // 调用 getBannersRequest 发起网络请求来获取广告横幅的数据
        getBannersRequest().then(data => {
            const action = changeBannersList(data.data)
            // 调用 dispatch 方法分发这个 action 对象到 Redux store
            dispatch(action)
        })
    }
}


export const getRestaurantsList = () => {
    return (dispatch) => {
        // 调用 getRestaurantsRequest 发起网络请求来获取餐厅列表的数据
        getRestaurantsRequest().then(data => {
            const action = changeRestaurantsList(data.data)
            dispatch(action)
            dispatch(changeLoading(false))
        })
    }
}
