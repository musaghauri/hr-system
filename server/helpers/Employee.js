/* eslint-disable */
import httpStatus from 'http-status';
import Employee from '../models/user';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';
import APIError from './common/APIError';

const mongoDriver = new MongoHanlder(Employee);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('User', activeDriver, mongoDriver);

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

function UpdateById(employeeId, employeeBody, user = null) {
  return new Promise((resolve, reject) => {
    const { name = null } = employeeBody;

    ifAttributeExists({ name }, name, employeeId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.updateById(employeeId, employeeBody, user).then(updatedEmployee => {
          resolve(updatedEmployee);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Create(employeeBody, user = null) {
  return new Promise((resolve, reject) => {
    const { name = null } = employeeBody;
    
    ifAttributeExists({ name }, name).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.create(Employee, employeeBody, user).then(savedEmployee => {
          resolve(savedEmployee);
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
