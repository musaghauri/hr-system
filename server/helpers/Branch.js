/* eslint-disable */
import Branch from '../models/branch';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';

const mongoDriver = new MongoHanlder(Branch);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Branch', activeDriver, mongoDriver);

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

function UpdateById(branchId, branchBody, user = null) {
  return CRUD.updateById(branchId, branchBody, user);
}

function Create(branchBody, user = null) {
  return CRUD.create(Branch, branchBody, user);
}


function Remove(id, user = null) {
  return CRUD.remove(id, user);
}


export default { Create, GetOne, UpdateById, GetById, Get, Remove };
