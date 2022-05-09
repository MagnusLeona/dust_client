const routes = [
  {
    path: '/login',
    component: () => import('../../views/login/login'),
    props: true
  }
];

export default routes;