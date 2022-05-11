console.log("------webpack build start ------")

import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './styles/dust.scss';
import "./components/svg/index";
import svgIcon from './components/svg/svg-icon';
import * as dust from './utils/dialog/index'

console.log(router.getRoutes())
// 注册根组件
const app = createApp(App);
app.config.globalProperties.$dust = dust;
app.use(router);
app.component("svg-icon", svgIcon);
// 将根组件挂载到#app上
app.mount('#app');
console.log(app)
