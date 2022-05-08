import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/dust.scss';
import utils from './utils/utils/index';
import "./components/svg/index";
import svgIcon from './components/svg/svg-icon';
import * as dust from './utils/dialog/index'

// 注册根组件
const app = createApp(App);
app.config.globalProperties.$utils = utils;
app.config.globalProperties.$dust = dust;
app.use(utils);
app.use(router);
app.component("svg-icon", svgIcon);
// 将根组件挂载到#app上
app.mount('#app');
