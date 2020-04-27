/* eslint-disable */
import httpStatus from 'http-status';
import Department from '../models/department';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';
import APIError from './common/APIError';

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
  return new Promise((resolve, reject) => {
    const { name = null } = departmentBody;

    ifAttributeExists({ name }, name, departmentId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.updateById(departmentId, departmentBody, user).then(updatedDepartment => {
          resolve(updatedDepartment);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Create(departmentBody, user = null) {
  return new Promise((resolve, reject) => {
    const { name = null } = departmentBody;
    
    ifAttributeExists({ name }, name).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.create(Department, departmentBody, user).then(savedDepartment => {
          resolve(savedDepartment);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Remove(id, user = null) {
  return CRUD.remove(id, user);
}

function ifAttributeExists(values, key, exception = null) {
  return new Promise((resolve, reject) => {
    CRUD.isUnique(values, exception).then((valueExists) => {
      if (!!valueExists) {
        const err = new APIError(`${_startCase(key)} already exists`, httpStatus.BAD_REQUEST);
        resolve({
          status: true,
          err,
        });
      } else {
        resolve({
            status: false
        });
      }
    })
    .catch(e => reject(e));
  });
}


export default { Create, GetOne, UpdateById, GetById, Get, Remove };
