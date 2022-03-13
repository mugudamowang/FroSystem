import { createApp } from 'vue'
import App from './App.vue'
import vuex from './store'
import router from './router'
// import { Button } from 'vant';  全局注册

const app = createApp(App);
// app.use(Button);
app.use(router);
app.use(vuex);
app.mount('#app');

