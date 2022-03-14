<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header"> <NavBar></NavBar> </el-header>
            <el-container>
                <el-main>
                    <p>itemCF-猜你喜欢</p>
                    <InfiniteList class="list"></InfiniteList>
                </el-main>
                <el-aside width="30%">
                    <el-radio-group v-model="direction">
                        <el-radio label="ltr">left to right</el-radio>
                        <el-radio label="rtl">right to left</el-radio>
                        <el-radio label="ttb">top to bottom</el-radio>
                        <el-radio label="btt">bottom to top</el-radio>
                    </el-radio-group>
                    <el-button
                        type="primary"
                        style="margin-left: 16px"
                        @click="drawer = true"
                    >
                        open
                    </el-button>
                    <el-button
                        type="primary"
                        style="margin-left: 16px"
                        @click="drawer2 = true"
                    >
                        with footer
                    </el-button>
                    <router-view v-slot="{ Component }">
                        <keep-alive include="hot">
                            <component :is="Component" />
                        </keep-alive>
                    </router-view>
                </el-aside>
            </el-container>

            <!-- 不带确认框, 展示商品详情 -->
            <el-drawer
                custom-class="drawerProductDetail"
                :modal="false"
                v-model="drawer"
                title="商品详情"
                :direction="ltr"
                :before-close="handleClose"
            >
                <span>Hi, there!</span>
            </el-drawer>
            <!-- 带确认框, 可以用作我的界面设置爱好和收藏夹 -->
            <el-drawer v-model="drawer2" :direction="rtl">
                <template #title>
                    <h4>set title by slot</h4>
                </template>
                <template #default>
                    <div>
                        <el-radio v-model="radio1" label="Option 1" size="large"
                            >Option 1</el-radio
                        >
                        <el-radio v-model="radio1" label="Option 2" size="large"
                            >Option 2</el-radio
                        >
                    </div>
                </template>
                <template #footer>
                    <div style="flex: auto">
                        <el-button @click="cancelClick">cancel</el-button>
                        <el-button type="primary" @click="confirmClick"
                            >confirm</el-button
                        >
                    </div>
                </template>
            </el-drawer>
        </el-container>
    </div>
</template>
<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import InfiniteList from "../components/InfiniteList.vue";
// import

import { ElMessageBox } from "element-plus";

const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref("rtl");
const radio1 = ref("Option 1");
const handleClose = (done) => {
    ElMessageBox.confirm("Are you sure you want to close this?")
        .then(() => {
            done();
        })
        .catch(() => {
            // catch error
        });
};
function cancelClick() {
    drawer2.value = false;
}
function confirmClick() {
    ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
        .then(() => {
            drawer2.value = false;
        })
        .catch(() => {
            // catch error
        });
}
</script>

<style lang="scss" scoped>
.common-layout {
    position: relative;
}

.header {
    padding: 0;
}
</style>