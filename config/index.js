const MONGO_URL =
  "mongodb+srv://bitbytes:bitbytes123@hr-system-5a8n4.mongodb.net/development?retryWrites=true&w=majority";
const { NODE_ENV } = process.env;
const AUTH_COOKIE_NAME = "hrms";
const ROLE_OPTIONS = [
  { key: "admin", text: "Admin", value: "admin" },
  { key: "employee", text: "Employee", value: "employee" }
];
export { MONGO_URL, NODE_ENV, AUTH_COOKIE_NAME, ROLE_OPTIONS };
