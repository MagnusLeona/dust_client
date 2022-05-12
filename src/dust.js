import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './styles/dust.scss';
import "./components/svg/index";
import svgIcon from './components/svg/svg-icon';
import * as dust from './utils/dialog/index'

// 注册根组件
const app = createApp(App);
app.config.globalProperties.$dust = dust;
app.use(router);
app.component("svg-icon", svgIcon);
// 将根组件挂载到#app上
app.mount('#app');

// lioshi
import hljs from "highlight.js";
import "highlight.js/scss/atom-one-dark.scss"; //样式文件
app.directive("highlight", {
  mounted(el) {
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
});
