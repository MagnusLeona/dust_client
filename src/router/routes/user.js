const routes = [
  {
    path: '/user',
    component: () => import("@/views/user/index.vue"),
    meta: {
      loginRequired: true,
      order: 1
    },
    children: [
      {
        path: '',
        component: () => import("@/views/user/main/index.vue")
      }
    ]
  }
]

export default routes;