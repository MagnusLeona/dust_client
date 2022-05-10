const routes = [
  {
    path: '/stories',
    component: () => import('../../views/stories/index.vue'),
    meta: {
      order: 2
    }
  }
];

export default routes;