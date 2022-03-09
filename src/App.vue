<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HomePage from './views/HomePage.vue';
import NavFooter from './components/NavFooter.vue';
import UserLoginVue from './views/UserLogin.vue';
import UserLogin from './views/UserLogin.vue';


</script>

<template>
  <HomePage :foo="foo" msg="传参测试app-->homePage"/>
  <NavFooter/>
  <UserLogin/>
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
