import { loginProceed } from '@/utils/utils/index';
import { createRouter, createWebHistory } from 'vue-router';
import demo from './routes/demo';
import login from './routes/login';
import main from './routes/main';
import mission from './routes/mission';
import story from './routes/story';
import techies from './routes/techies';
import user from './routes/user';


const router = createRouter({
  history: createWebHistory("/dust"),
  routes: [
    ...login,
    ...main,
    ...mission,
    ...demo,
    ...techies,
    ...story,
    ...user
  ]
});


router.beforeEach(async (to, from) => {
  if(to.meta.loginRequired) {
    // 如果需要登录，就判断是否已经登录
    let login  = await loginProceed();
    if(login) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
})

export default router;