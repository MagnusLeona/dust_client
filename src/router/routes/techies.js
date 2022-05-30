const routes = [
  {
    path: '/techies',
    name: 'techies',
    component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/index.vue'),
    meta: {
      order: 2
    },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/main/index.vue'),
        meta: {
          order: 3
        },
      },
      {
        path: 'main',
        component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/main/index.vue'),
        meta: {
          order: 3
        },
      },
      {
        path: 'article-list',
        component: () => import(/* webpackChunkName: "techies" */ "../../views/techies/article-list/index.vue"),
        props: route => ({ type: route.query.type }),
        meta: {
          order: 4
        }
      },
      {
        path: 'publish',
        component: () => import(/* webpackChunkName: "techies" */ "../../views/techies/publish/index.vue"),
        meta: {
          order: 4
        }
      },
      {
        path: 'publish-editor',
        component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/publish-editor/index.vue'),
        meta: {
          order: 5
        }
      },
      {
        path: 'publish-upload',
        component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/publish-upload/index.vue'),
        meta: {
          order: 5
        }
      },
      {
        path: 'artical-detail',
        component: () => import(/* webpackChunkName: "techies" */ '../../views/techies/artical-detail/index.vue'),
        props: route => ({ articleId: route.query.articleId }),
        meta: {
          order: 5
        }
      }
    ]
  }
];

export default routes;