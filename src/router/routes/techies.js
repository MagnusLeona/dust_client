const routes = [
  {
    path: '/techies',
    component: () => import('../../views/techies/index.vue'),
    redirect: '/techies/main',
    meta: {
      order: 2
    },
    children: [
      {
        path: 'main',
        component: () => import('../../views/techies/main/index.vue'),
        meta: {
          order: 3
        },
      },
      {
        path: 'front-end',
        component: () => import('../../views/techies/front-end/index.vue'),
        meta: {
          order: 4
        }
      },
      {
        path: 'back-end',
        component: () => import('../../views/techies/back-end/index.vue'),
        meta: {
          order: 4
        },
      },
      {
        path: 'publish',
        component: () => import('../../views/techies/publish-editor/index.vue'),
        meta: {
          order: 4
        }
      },
      {
        path: 'artical-detail',
        component: () => import('../../views/techies/artical-detail/index.vue'),
        meta: {
          order: 5
        }
      }
    ]
  }
];

export default routes;