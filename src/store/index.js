import { createStore } from 'vuex'

import demo from './modules/demo'


export default createStore({
    modules: {
        demo
    },
    // strict: debug,
    // plugins: debug ? [createLogger()] : []
})


// 创建一个新的 store 实例
// const store = createStore({
//     state() {
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }
// })