import * as actionTypes from './constants.js'

// const defaulState = {...} 定义了一个初始状态对象。该对象包含了三个属性：BannersList、RestaurantsList 和 Loading，
// 它们的初始值分别为一个空数组、一个空数组和 true。
const defaulState = {
    BannersList: [],
    RestaurantsList: [],
    Loading: true

}

const reducer = (state = defaulState, action) => {
    switch (action.type) {
        // 返回的新对象继承自当前状态对象 state，但同时更新了 BannersList 属性，设置为 action 的数据部分
        case actionTypes.GET_BANNERS_LIST:
            return {
                ...state,
                BannersList: action.data,
            }
        //返回的新对象继承自当前状态对象 state，但同时更新了 RestaurantsList 属性，设置为 action 的数据部分 
        case actionTypes.GET_RESTAURANTS_LIST:
            return {
                ...state,
                RestaurantsList: action.data,
            }
        // 返回的新对象继承自当前状态对象 state，但同时更新了 Loading 属性，设置为 action 的数据部分 
        case actionTypes.GET_LOADING:
            return {
                ...state,
                Loading: action.data,
            }
        // 没有匹配到任何上述的 action 类型时，返回当前状态对象 state
        default:
            return state
    }
}
export default reducer