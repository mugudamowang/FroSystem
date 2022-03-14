<script setup>
//一般组件
import { ref, onBeforeUnmount, onActivated, onDeactivated } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";

const active = ref(0);

const router = useRouter();

const goHome = () => {
    router.push({
        name: "home",
    });
};
const goSearch = () => {
    router.push({
        name: "search",
    });
};

const confirmEvent = () => {
    sessionStorage.clear();
    router.push({
        name: "login",
    });
};
const cancelEvent = () => {
    console.log("cancel!");
};

onBeforeUnmount(function () {
    console.log("navbar销毁");
});
</script>


<template>
    <nav>
        <ul>
            <li class="goLogin">
                <el-popconfirm
                    confirmButtonText="确认"
                    cancelButtonText=" "
                    title="确定退出系统?"
                    @confirm="confirmEvent"
                    trigger="hover"
                >
                    <template #reference>
                        <svg
                            t="1647224446745"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="1557"
                            width="48"
                            height="48"
                        >
                            <path
                                d="M544.512 201.696l2.416 1.936 279.472 237.76a16 16 0 0 1 1.856 22.512l-10.352 12.256a16 16 0 0 1-22.56 1.888l-0.032-0.032L515.936 240.32a0.928 0.928 0 0 0-0.816-0.192l-0.384 0.192-274.464 232.576-0.256 0.32-0.08 0.384v309.36c0 0.352 0.192 0.64 0.464 0.8l0.48 0.144h555.744a16 16 0 0 1 16 16V816a16 16 0 0 1-16 16H240.864a48.944 48.944 0 0 1-48.784-46.16l-0.08-2.88V473.6c0-13.328 5.408-26.032 14.88-35.232l2.464-2.24 274.464-232.56a48.736 48.736 0 0 1 60.704-1.872z m8.496 277.92a16 16 0 0 1 22.624 0l11.392 11.376 1.328 1.504a16 16 0 0 1-1.328 21.12l-70.512 70.48h291.872a16 16 0 0 1 16 16v15.936a16 16 0 0 1-16 16H516.8l70.592 70.608a16 16 0 0 1 1.328 21.12l-1.328 1.504-11.28 11.264a16 16 0 0 1-22.624 0l-117.392-117.392a16 16 0 0 1 0-22.624z"
                                p-id="1558"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </template>
                </el-popconfirm>
            </li>
            <li>
                <el-input
                    v-model="input1"
                    class="w-50 m-2"
                    size="large"
                    placeholder="搜索商品"
                >
                    <template #append>
                        <el-button
                            @click="goSearch"
                            :icon="Search"
                        ></el-button> </template
                ></el-input>
            </li>
            <li>
                <el-popover
                    placement="left"
                    title="你好哇"
                    width="50"
                    trigger="hover"
                    content="点击查看我的收藏"
                >
                    <template #reference>
                        <svg
                            t="1647225707626"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2891"
                            width="48"
                            height="48"
                        >
                            <path
                                d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667zM288 810.666667c0-123.733333 100.266667-224 224-224S736 686.933333 736 810.666667c-61.866667 46.933333-140.8 74.666667-224 74.666666s-162.133333-27.733333-224-74.666666z m128-384c0-53.333333 42.666667-96 96-96s96 42.666667 96 96-42.666667 96-96 96-96-42.666667-96-96z m377.6 328.533333c-19.2-96-85.333333-174.933333-174.933333-211.2 32-29.866667 51.2-70.4 51.2-117.333333 0-87.466667-72.533333-160-160-160s-160 72.533333-160 160c0 46.933333 19.2 87.466667 51.2 117.333333-89.6 36.266667-155.733333 115.2-174.933334 211.2-55.466667-66.133333-91.733333-149.333333-91.733333-243.2 0-204.8 168.533333-373.333333 373.333333-373.333333S885.333333 307.2 885.333333 512c0 93.866667-34.133333 177.066667-91.733333 243.2z"
                                p-id="2892"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </template>
                </el-popover>
            </li>
        </ul>
    </nav>
</template>
    

<style scoped lang="scss">
nav {
    background: rgba(124, 124, 219);
    z-index: 1000;
    color: white;
    top: 0;
    ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        li:nth-child(2n-1) {
            width: 50px;
            height: 50px;
            padding: 5px;
        }
    }
}
.logo {
    object-fit: contain;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>