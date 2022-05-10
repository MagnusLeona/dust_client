const routes = [
  {
    path: '/main',
    component: () => import('../../views/main/index'),
    meta: {
      order: 1
    }
  }
];

export default routes;