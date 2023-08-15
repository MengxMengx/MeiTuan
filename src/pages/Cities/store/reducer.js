import * as actionTypes from './constants.js'

// reducer的初始状态对象
const defaulState = {
    CitiesList: [],
}

// 表示redux reducer函数
// state 表示当前的状态对象，默认值为 defaulState；action 表示当前发起的 action 对象，用于指示 reducer 执行的具体操作。
export default (state = defaulState, action) => {
    // 在函数体内，使用 switch 语句根据不同的 action 类型执行相应的操作
    switch (action.type) {
        // 当 action 类型为 CHANGE_CITIES_LIST 时，通过使用展开运算符 ...，创建一个新的状态对象，并将 CitiesList 属性更新为 action.data
        case actionTypes.CHANGE_CITIES_LIST:
            return {
                ...state,
                CitiesList: action.data,

            }
        // 如果没有匹配到任何 action 类型，直接返回当前的状态对象。
        default:
            return state
    }
}

// 这个reducer函数负责处理来自不同action的状态变化。
// 当调用 dispatch 方法分发 action 到 Redux store 时，该 reducer 函数将根据 action 的类型来决定如何更新状态