import { createRouter, createWebHistory } from 'vue-router';
import login from './routes/login';
import main from './routes/main';
import mission from './routes/mission';
import demo from './routes/demo'

const router = createRouter({
  history: createWebHistory('/dust/'),
  routes: [
    ...login,
    ...main,
    ...mission,
    ...demo
  ]
});

export default router;