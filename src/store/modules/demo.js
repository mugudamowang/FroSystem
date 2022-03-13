import axios from "axios";

// initial state
const state = () => ({
    count: 1,
    hitokoto: ''
})

// getters 复用计算属性
const getters = {
    bigCount(state) {
        return state.count * 10
    }
}

// actions 写业务逻辑+ajax请求
// context --> {commit} 
const actions = {
    ajaxAdd({ commit }, value) {
        //模拟异步请求
        console.log("等待1s刷新count模拟异步操作");

        setTimeout(() => {
            commit('addCount', value)
            console.log("刷新成功")
        }, 1000)
    },
    ajaxYan({ commit }) {
        axios.get('https://v1.hitokoto.cn')
            .then(({ data }) => {
                commit('hitokoto', data.hitokoto)
            })
            .catch((function (error) {
                alert('网络不行, 待会再试试')
            }))
    }
}

// mutations 数据操作
const mutations = {
    addCount(state, value) {
        state.count += value
    },
    hitokoto(state, value) {
        state.hitokoto = value
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}