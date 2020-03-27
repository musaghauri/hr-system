const MONGO_URL =
  'mongodb+srv://bitbytes:bitbytes123@hr-system-5a8n4.mongodb.net/development?retryWrites=true&w=majority';
const { NODE_ENV } = process.env;
module.exports = { MONGO_URL, NODE_ENV };
