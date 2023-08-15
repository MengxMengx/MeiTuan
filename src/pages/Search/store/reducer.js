import * as actionTypes from './constants'

const defaultState = {
    // KeyList: [],
    enterLoading: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        // case actionTypes.SET_KEYWORDS:
        //     return {
        //         ...state,
        //         KeyList: action.data
        //     }
        
        // 当 action 类型为 actionTypes.SET_ENTER_LOADING 时，返回一个新的状态对象，
        // 该对象继承自当前状态对象 state，但同时更新了 enterLoading 属性，设置为 action 的数据部分(action.data)
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        
        default:
            return state
    }
}