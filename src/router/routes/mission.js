const routes = [
  {
    path: '/mission',
    component: () => import('../../views/mission/index.vue'),
    redirect: "/mission/main",
    children: [
      {
        path: "main",
        component: () => import('../../views/mission/main/index.vue')
      }
    ]
  }
];

export default routes;