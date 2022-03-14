<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HomePage from "./pages/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import UserLogin from "./pages/UserLogin.vue";
import Demo from "./pages/demo.vue";
</script>

<template>
    <router-view></router-view>
</template>

<style>
body,
ul,
li,
ol {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: fixed;
    width: 100%;
}

::-webkit-scrollbar {
    width: 7px;
    height: 5px;
    border-radius: 15px;
    -webkit-border-radius: 15px;
}
::-webkit-scrollbar-track-piece {
    background-color: #ffff;
    border-radius: 15px;
    -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(144, 147, 153, 0.5);
    border-radius: 15px;
    -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:horizontal {
    width: 7px;
    background-color: rgba(144, 147, 153, 0.5);
    border-radius: 15px;
    -webkit-border-radius: 15px;
}
</style>
