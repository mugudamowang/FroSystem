<template>
    <div>
        {{ msg }}
        <p>{{username}}-{{password}}</p>
        <button @click="onLogin">发送登录接口请求</button>
        <p>{{res}}</p>
        <hr>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"HomePage",
    props:{
        msg: String,
    },
    data(){
        return{
            username: 'mugu',
            password: 123,
            res: '登录后这里显示数据'
        }
    },
    methods : {
        onLogin() {
            this.foo();
            console.log("login...");
            axios
                .get("http://localhost:8888/rest/user/login", {
                    params: {
                        username: this.username,
                        password: this.password,
                    },
                })
                .then((res) => {
                    //跳转my
                    if (res.data) {
                        console.log(res.data);
                        this.res = res.data;
                    }
                    else{alert("请注册账号")}
                });
        }
    }
};
</script>
<style lang="">
</style>