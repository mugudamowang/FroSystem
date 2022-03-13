<script setup>
//一般组件
import { ref, onBeforeUnmount, onActivated, onDeactivated } from "vue";

const active = ref(0);

onBeforeUnmount(function(){
    console.log("navbar销毁");
})


</script>


<template>
    <h2>bar</h2>
</template>
    

<style>
</style>