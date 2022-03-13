import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory

import home from '../pages/HomePage.vue'
import demo from '../pages/demo.vue'
import navbar from '../components/NavFooter.vue'
import login from '../pages/UserLogin.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                authorization: true
            }
        },
        {
            path: '/login',
            component: login,
            name: "login"
        },
        {
            path: '/demo', component: demo,
            children: [
                {
                    path: 'navbar',
                    component: navbar
                },
                {
                    path: 'login/:first',
                    name: 'loginDemo',  //简化路由(比如嵌套路由很长)
                    component: login,
                    props(route) {
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

//路由守卫⚔
router.beforeEach(function (to, from, next) {
    if (to.meta.authorization) {
        //页面是否登录
        if (sessionStorage.getItem("isLogin")) {
            //本地存储中是否有isLogin标识
            next(); //表示已经登录
        } else {
            //next可以传递一个路由对象作为参数 表示需要跳转到的页面
            next({
                name: "login"
            });
        }
    } else {
        //表示不需要登录
        next(); //继续往后走
    }
});

export default router
