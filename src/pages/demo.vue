<template>
    <div>
        <p>
            <!--使用 router-link 组件进行导航 -->
            <!--通过传递 `to` 来指定链接 -->
            <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签, 如果要使用其他标签导航, 则应使用编程式路由-->
            <router-link to="/demo/navbar">Go to nav</router-link>&nbsp;|
            <!-- <router-link to="`/demo/login/${true}`">模板字符串path参数</router-link>&nbsp;| -->
            <router-link
                :to="{
                    name: 'login',
                    params: {
                        first: true,
                    },
                    query: {
                        username: 'mugu',
                        password: '123456',
                    },
                }"
                >Go to login</router-link
            >
        </p>

        <p>{{ byState }}--{{ byGetters }}</p>
        <button @click="testVuex">addCount+addAjax($写法)</button>
        <p>{{ count }}--{{ bigCount }}</p>
        <button
            @click="
                addCount(2);
                ajaxAdd(2);
            "
        >
            addCount+addAjax(map写法)
        </button>
        <p>{{ hitokoto }}</p>
        <button @click="ajaxYan">发送Ajax请求</button>
        <button @click="pushRoute">push查看(延时跳转)</button>
        <button @click="replaceRoute">replace查看</button>

        <hr />

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- 组件切换的时候会被频繁销毁和生成 -->
        <router-view></router-view>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "demo",
    props: {
        msg: String,
    },
    computed: {
        byGetters() {
            return this.$store.getters["demo/bigCount"];
        },
        byState() {
            return this.$store.state.demo.count;
        },
        ...mapState("demo", ["count", "hitokoto"]),
        ...mapGetters("demo", ["bigCount"]),
    },
    methods: {
        testVuex() {
            this.$store.commit("demo/addCount", 2);
            this.$store.dispatch("demo/ajaxAdd", 2);
        },
        pushRoute() {
            setTimeout((e) => {
                this.$router.push({
                    name: "login",
                    query: {
                        username: "oliver",
                        password: 123456,
                    },
                    params: {
                        first: true,
                    },
                });
            }, 2000);
        },
        replaceRoute() {
            this.$router.replace({
                name: "login",
                query: {
                    username: "bukun",
                    password: 123456,
                },
                params: {
                    first: true,
                },
            });
        },
        ...mapMutations("demo", ["addCount"]),
        ...mapActions("demo", ["ajaxAdd", "ajaxYan"]),
    },
    beforeDestroy() {
        console.log("demo销毁");
    },
    activated(){
        console.log("激活了demo");
    },
    deactivated(){
        console.log("失活了demo");
    }
};
</script>
<style lang="">
</style>