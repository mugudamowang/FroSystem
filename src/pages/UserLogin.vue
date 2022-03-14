<template>
    <div class="wrapper">
        <el-container class="container">
            <el-row :gutter="20" justify="center">
                <el-col :span="14">
                    <div>
                        <h2>基于推荐技术的益智产品导航系统</h2>
                        <h3>系统综述</h3>
                    </div>
                    <div class="description">
                        <div>
                            <p>RecSystem</p>
                            <ul>
                                <li>
                                    AlgSystem:
                                    通过益智产品数据的清洗分析获得推荐数据
                                </li>
                                <li>BacSystem: 构建聚合查询的推荐业务系统</li>
                                <li>FroSystem: 搭建响应式的前端交互系统</li>
                            </ul>
                        </div>
                        <div class="coreTech">
                            <p>核心技术</p>
                            <a href="https://spark.apache.org/" target="_blank">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/768px-Apache_Spark_logo.svg.png?20210416091439"
                                    alt="spark"
                                />
                            </a>
                            <a
                                href="https://spring.io/guides/gs/serving-web-content/"
                                target="_blank"
                            >
                                <img
                                    src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
                                    alt="spring"
                                />
                            </a>
                            <a href="https://vuejs.org/" target="_blank">
                                <img
                                    src="https://cn.vuejs.org/images/logo.svg"
                                    alt="vue"
                                />
                            </a>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <el-tabs
                        v-model="activeName"
                        class="loginCard"
                        type="border-card"
                    >
                        <el-tab-pane name="login" label="登录">
                            <el-form
                                ref="ruleFormRef1"
                                :model="ruleFormForLogin"
                                status-icon
                                :rules="rulesForLogin"
                                label-width="120px"
                                class="demo-ruleForm"
                            >
                                <el-form-item label="用户名" prop="username">
                                    <el-input
                                        v-model="ruleFormForLogin.username"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input
                                        v-model="ruleFormForLogin.password"
                                        type="password"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button
                                        type="primary"
                                        @click="submitFormToLogin(ruleFormRef1)"
                                        >登录</el-button
                                    >
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane name="register" label="注册">
                            <el-form
                                ref="ruleFormRef2"
                                :model="ruleFormForRegister"
                                status-icon
                                :rules="rulesForRegite"
                                label-width="120px"
                                class="demo-ruleForm"
                            >
                                <el-form-item label="用户名" prop="username">
                                    <el-input
                                        v-model="ruleFormForRegister.username"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input
                                        v-model="ruleFormForRegister.password"
                                        type="password"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="checkPass">
                                    <el-input
                                        v-model="ruleFormForRegister.checkPass"
                                        type="password"
                                        autocomplete="off"
                                    ></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-button
                                        type="primary"
                                        @click="
                                            submitFormToRegiste(ruleFormRef2)
                                        "
                                        >注册</el-button
                                    >
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>
    
<script lang="ts" setup>
import axios from "axios";
import { ref, reactive, defineProps, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { FormInstance } from "element-plus";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const activeName = ref("login");

if (sessionStorage.getItem("isLogin")) {
    router.push({
        name: "home",
    });
    alert("请先登出当前用户");
}

const ruleFormRef1 = ref<FormInstance>();
const ruleFormRef2 = ref<FormInstance>();

//密码空字符串校验
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error("密码不能为空!"));
    } else {
        callback();
    }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error("密码不能为空!"));
    } else if (value !== ruleFormForRegister.password) {
        callback(new Error("两次输入不一致!"));
    } else {
        callback();
    }
};

const validateUsername = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error("用户名不能为空!"));
    } else {
        callback();
    }
};

const ruleFormForLogin = reactive({
    password: "",
    username: "",
});

const ruleFormForRegister = reactive({
    password: "",
    checkPass: "",
    username: "",
});

const rulesForLogin = reactive({
    password: [{ validator: validatePass, trigger: "blur" }],
    checkPass: [{ validator: validatePass2, trigger: "blur" }],
    username: [{ validator: validateUsername, trigger: "blur" }],
});

const rulesForRegite = reactive({
    password: [{ validator: validatePass, trigger: "blur" }],
    checkPass: [{ validator: validatePass2, trigger: "blur" }],
    username: [{ validator: validateUsername, trigger: "blur" }],
});

const submitFormToLogin = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            // 发起登录
            store.dispatch("demo/onLogin", { ...ruleFormForLogin }).then(() => {
                router.push({
                    name: "home",
                });
            });
        } else {
            console.log("error submit!");

            //校验错误
            return false;
        }
    });
};

const submitFormToRegiste = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
        if (valid) {
            store
                .dispatch("demo/onRegister", { ...ruleFormForRegister })
                .then((e) => {
                    if (e.data.success) {
                        confirm("注册成功, 去登陆");
                        activeName.value = "login";
                    } else {
                        alert(e.data.message);
                    }
                });
        } else {
            console.log("error submit!");
            //校验错误
            return false;
        }
    });
};
</script>
<style scoped>

.warpper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.container{
    height: 100%;
}

.loginCard {
    max-width: 500px;
}
.coreTech img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.description {
    display: flex;
    justify-content: center;
}
.description > p > p {
    width: fit-content;
    outline: 2px #002fa68c solid;
    padding: 10px;
    border-radius: 5px;
    text-align: start;
}
.description > p {
    width: 500px;
}
</style>