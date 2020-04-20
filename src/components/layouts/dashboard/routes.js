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
    name: 'assets',
    label: 'Assets',
    route: '/assets',
    icon: 'laptop',
  },
  {
    name: 'roles',
    label: 'Roles',
    route: '/roles',
    icon: 'male',
  },
  {
    name: 'permissions',
    label: 'Permissions',
    route: '/permissions',
    icon: 'users',
  },
  {
    name: 'countries',
    label: 'Countries',
    route: '/countries',
    icon: 'map marker alternate',
  },
  {
    name: 'states',
    label: 'States',
    route: '/states',
    icon: 'map marker alternate',
  },
  {
    name: 'cities',
    label: 'Cities',
    route: '/cities',
    icon: 'map marker alternate',
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