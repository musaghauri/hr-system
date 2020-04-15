const PROD = process.env.NODE_ENV === 'production';
const NEXT_API_URL = PROD
  ? 'https://bitbytes-hrms.herokuapp.com/api'
  : 'http://localhost:8000/api';
const MONGO_URL =
  'mongodb+srv://bitbytes:bitbytes123@hr-system-5a8n4.mongodb.net/development?retryWrites=true&w=majority';
const { NODE_ENV } = process.env;
const AUTH_COOKIE_NAME = 'hrms';
const ROLE_OPTIONS = [
  { key: 'admin', text: 'Admin', value: 'admin' },
  { key: 'employee', text: 'Employee', value: 'employee' },
];
const ROLE_ADMIN = '5e8c81600d989e35800e2167';
const JWT_SECRET_TOKEN = 'my_secret_key';
export {
  MONGO_URL,
  NODE_ENV,
  AUTH_COOKIE_NAME,
  ROLE_OPTIONS,
  NEXT_API_URL,
  JWT_SECRET_TOKEN,
  ROLE_ADMIN,
};
