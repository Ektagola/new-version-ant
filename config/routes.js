export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    component: './dashboard',
    access: 'canAdmin',
  },
  {
    name: 'Developer',
    icon: 'user',
    path: '/developer',
    component: './developer',
    access: 'canDeveloper',
  },
  {
    name: 'User',
    icon: 'user',
    path: '/users',
    component: './users',
    access: 'canUser',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: './404',
  },
];
