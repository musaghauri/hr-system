import cookie from '@utils/cookie';
import Router from 'next/router';

const logout = e => {
  e.preventDefault();
  cookie.remove('token');
  cookie.removeAuthCookie();
  Router.replace('/login');
};

const routes = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    route: '/dashboard',
    icon: 'dashboard',
  },
  {
    name: 'employees',
    label: 'Employees',
    route: '/employees',
    icon: 'users',
  },
  {
    name: 'permissions',
    label: 'Permissions',
    route: '/permissions',
    icon: 'users',
  },
  {
    name: 'logout',
    label: 'Logout',
    icon: 'log out',
    type: 'eventHandler',
    handleClick: logout,
  },
];

export default routes;
