import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import login from './routes/login';
import main from './routes/main';
import mission from './routes/mission';
import demo from './routes/demo'
import techies from './routes/techies'
import story from './routes/story'

const router = createRouter({
  history: createWebHistory("/dust"),
  routes: [
    ...login,
    ...main,
    ...mission,
    ...demo,
    ...techies,
    ...story
  ]
});

export default router;