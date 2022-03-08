<script setup>
import { TabbarItem, Tabbar } from "vant";
import { ref } from "vue";

const active = ref(0);
</script>


<template>
    <Tabbar v-model="active">
        <TabbarItem icon="home-o">标签</TabbarItem>
        <TabbarItem icon="search">标签</TabbarItem>
        <TabbarItem icon="friends-o">标签</TabbarItem>
        <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
</template>
    

<style>
</style>