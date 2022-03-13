import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory

import home from '../pages/HomePage.vue'
import demo from '../pages/demo.vue'
import navbar from '../components/NavFooter.vue'
import login from '../pages/UserLogin.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: home },
        {
            path: '/demo', component: demo,
            children:[
                {
                    path: 'navbar',
                    component: navbar
                },
                {
                    path: 'login/:first',
                    name: 'login',  //简化路由(比如嵌套路由很长)
                    component: login,
                    props(route){
                        return {
                            first: route.params.first,
                            username: route.query.username,
                            password: route.query.password
                        }
                    }
                },
            ]
        },
    ],
})
