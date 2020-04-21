/* eslint-disable */
import httpStatus from 'http-status';
import Announcement from '../models/announcement';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';
import APIError from './common/APIError';

const mongoDriver = new MongoHanlder(Announcement);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Announcement', activeDriver, mongoDriver);

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

function UpdateById(announcementId, announcementBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      title = null,
    } = announcementBody;
    ifAttributeExists({ title }, title, announcementId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.updateById(announcementId, announcementBody, user).then(updatedAnnouncement => {
          resolve(updatedAnnouncement);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Create(announcementBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      title = null,
    } = announcementBody;
    
    ifAttributeExists({ title }, title).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.create(Announcement, announcementBody, user).then(savedAnnouncement => {
          resolve(savedAnnouncement);
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
