const routes = [
  {
    path: '/login',
    component: () => import('../../views/login/login'),
    props: true,
    meta: {
      order: 0
    }
  }
];

export default routes;