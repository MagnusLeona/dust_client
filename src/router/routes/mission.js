const routes = [
  {
    path: '/mission',
    component: () => import('../../views/mission/index.vue'),
    redirect: "/mission/main",
    meta: {
      order: 2
    },
    children: [
      {
        path: "main",
        component: () => import('../../views/mission/main/index.vue'),
        meta: {
          order: 3
        }
      },
      {
        path: "total",
        component: () => import("../../views/mission/total/index.vue"),
        meta: {
          order: 4
        }
      }
    ]
  }
];

export default routes;