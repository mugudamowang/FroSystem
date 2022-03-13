<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HomePage from "./pages/HomePage.vue";
import NavFooter from "./components/NavFooter.vue";
import UserLogin from "./pages/UserLogin.vue";
import Demo from "./pages/demo.vue";
</script>

<template>
    <p>
        <!--使用 router-link 组件进行导航 -->
        <!--通过传递 `to` 来指定链接 -->
        <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签, 如果要使用其他标签导航, 则应使用编程式路由-->
        <router-link to="/demo">Go to demo</router-link>&nbsp;|
        <router-link to="/home">Go to home</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- 组件切换的时候会被频繁销毁和生成 -->
    <router-view v-slot="{ Component }">
        <keep-alive include="demo">
            <component :is="Component" />
        </keep-alive>
    </router-view>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
