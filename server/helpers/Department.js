/* eslint-disable */
import Department from '../models/department';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';

const mongoDriver = new MongoHanlder(Department);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Department', activeDriver, mongoDriver);

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

function UpdateById(departmentId, departmentBody, user = null) {
  return CRUD.updateById(departmentId, departmentBody, user);
}

function Create(departmentBody, user = null) {
  return CRUD.create(Department, departmentBody, user);
}


function Remove(id, user = null) {
  return CRUD.remove(id, user);
}


export default { Create, GetOne, UpdateById, GetById, Get, Remove };
