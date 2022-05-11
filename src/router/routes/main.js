const routes = [
  {
    path: '/',
    component: () => import('../../views/main/index'),
    redirect: '/main',
    meta: {
      order: 0
    }
  },
  {
    path: '/main',
    component: () => import('../../views/main/index'),
    meta: {
      order: 1
    }
  }
];

export default routes;