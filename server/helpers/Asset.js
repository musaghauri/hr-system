/* eslint-disable */
import httpStatus from 'http-status';
import Asset from '../models/asset';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';
import APIError from './common/APIError';

const mongoDriver = new MongoHanlder(Asset);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Asset', activeDriver, mongoDriver);

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

function UpdateById(assetId, assetBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      name = null,
    } = assetBody;
    ifAttributeExists({ name }, name, assetId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.updateById(assetId, assetBody, user).then(updatedAsset => {
          resolve(updatedAsset);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Create(assetBody, user = null) {
  return new Promise((resolve, reject) => {
    // const {
    //   name = null,
    // } = assetBody;
    CRUD.create(Asset, assetBody, user).then(savedAsset => {
      resolve(savedAsset);
    })
   
    // ifAttributeExists({ name }, name).then(data => {
    //   if(!!(_get(data, 'status'))) {
    //     reject({
    //       status: httpStatus.BAD_REQUEST,
    //       err: _get(data, 'err'),
    //     });
    //   } else {
    //     CRUD.create(Asset, assetBody, user).then(savedAsset => {
    //       resolve(savedAsset);
    //     })
    //     .catch(e => reject(e));
    //   }
    // })
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
