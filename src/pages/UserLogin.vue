<template>
    <form action="get" @submit.prevent="onSubmit">
        <input
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <input
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
            <button round block type="primary" native-type="submit">
                登录
            </button>
        </div>
    </form>
    首次登录{{ firstR }}-{{ first }} 数据{{ data }}
</template>
    
<script setup>
import axios from "axios";
import { ref, defineProps, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

onBeforeUnmount(function () {
    console.log("login销毁");
});

const route = useRoute();

const passwordR = ref(route.query.password);
const usernameR = ref(route.query.username);
let data = ref("");
let firstR = ref(route.params.first);
const props = defineProps(["first", "username", "password"]); //用props接受参数

const onSubmit = function () {
    console.log("login...");
    axios
        .get("https://v1.hitokoto.cn", {
            params: {
                username: usernameR.value,
                password: passwordR.value,
            },
        })
        .then((res) => {
            //跳转my
            if (res.data) {
                data.value = res.data.hitokoto;
                firstR.value = false;
                console.log("success");
            } else {
                alert("请注册账号");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};
</script>
    
<style>
</style>