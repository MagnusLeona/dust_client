const routes = [
  {
    path: '/demo',
    component: () => import('../../views/demo/index'),
    meta: {
      order: 0
    }
  }
];

export default routes;