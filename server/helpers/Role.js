/* eslint-disable */
import Role from '../models/role';

import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';

const mongoDriver = new MongoHanlder(Role);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Role', activeDriver, mongoDriver);

function GetOne(query, populate= ['','']) {
  return CRUD.getOne(query, populate);
}

function GetById(id, populate= ['','']) {
  return CRUD.getById(id, populate);
}

function Get(params, populate= ['','']) {
  const {
    limit = 20,
    skip = 0,
    query = {},
    sort = 'createdAt',
    order = 'desc'
  } = params;
  return CRUD.get(query, skip, limit, sort, order, populate);
}

function UpdateById(roleId, roleBody, user = null) {
    return CRUD.updateById(roleId, roleBody, user);
}

function Create(roleBody, user = null) {
    return CRUD.create(Role, roleBody, user)
}

export default { Create, GetOne, UpdateById, GetById, Get };
