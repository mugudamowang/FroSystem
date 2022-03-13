import axios from "axios";

// initial state
const state = () => ({
    user: {},
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
    onLogin({ commit }, value) {
        return axios.get('api/user/login', {
            params: {
                username: value.username,
                password: value.password
            }
        }).then((e) => {
            sessionStorage.setItem("isLogin", e.data.success)
            commit('authorized', e.data.user)
        }).catch((e) => {
                alert('找不到该账户信息, 请检查账号信息!')
            })
    },
    onRegister({ commit }, value){
        return axios.get('api/user/register',{
            params:{
                username: value.username,
                password: value.password
            }
        })
    }
}

// mutations 数据操作
const mutations = {
    addCount(state, value) {
        state.count += value
    },
    hitokoto(state, value) {
        state.hitokoto = value
    },
    authorized(state, value){
        state.user = value;
        console.log(state.user);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}