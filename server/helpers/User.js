/* eslint-disable */
import httpStatus from 'http-status';

import _get from 'lodash/get';
import _startCase from 'lodash/startCase';

import EncryptHelper from './common/encrypt';
import APIError from './common/APIError';

import User from '../models/user';

import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';


import { isStrongPassword } from '@utils/validations';
const mongoDriver = new MongoHanlder(User);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('User', activeDriver, mongoDriver);


function GetById(id, populate= ['','']) {
  return CRUD.getById(id, populate);
}

function GetOne(query, populate= ['','']) {
  return CRUD.getOne(query, populate);
}



function UpdateById(userId, userBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      email = null,
    } = userBody;
    ifAttributeExists({ email }, 'email', userId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        if(!!userBody.password) {
        EncryptHelper.encrypt(userBody.password) 
          .then(hashedPassword => {
            userBody.password = hashedPassword;
            CRUD.updateById(userId, userBody, user).then(updatedUser => {
              resolve(updatedUser);
            })
            .catch(e => reject(e));
          })
          .catch(e => reject(e))
        } else {
          CRUD.updateById(userId, userBody, user).then(updatedUser => {
            resolve(updatedUser);
          })
          .catch(e => reject(e));
        }
      }
    })
    .catch(e => reject(e));
  });
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


function Create(userBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      email = null,
    } = userBody;

    ifAttributeExists({ email }, 'email').then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        EncryptHelper.encrypt(userBody.password) 
          .then(hashedPassword => {
            if(!userBody.social) userBody.password = hashedPassword;
            CRUD.create(User, userBody, user).then(savedUser => {
              resolve(savedUser);
            })
            .catch(e => reject(e));
          })
          .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function Update(userId, userBody, user = null) {
  return new Promise((resolve, reject) => {
    const {
      email = null,
    } = userBody;
    ifAttributeExists({ email }, 'email', userId).then(data => {
      if(!!(_get(data, 'status'))) {
        reject({
          status: httpStatus.BAD_REQUEST,
          err: _get(data, 'err'),
        });
      } else {
        CRUD.update(userId, userBody, user).then(updatedUser => {
          resolve(updatedUser);
        })
        .catch(e => reject(e));
      }
    })
    .catch(e => reject(e));
  });
}

function ChangeSecretInformation(id, userBody, attribute, user = null) {
  return new Promise((resolve, reject) => {
    if(attribute === 'password') {
      const { password, newPassword, confirmNewPassword } = userBody;
      if(newPassword !== confirmNewPassword) {
        const err = new APIError('The provided passwords do not match', httpStatus.BAD_REQUEST);
        reject({
          status: httpStatus.BAD_REQUEST,
          err,
        });
      } else if(!isStrongPassword(newPassword)) {
        const err = new APIError('Password should have at least 6 characters', httpStatus.BAD_REQUEST);
        reject({
          status: httpStatus.BAD_REQUEST,
          err,
        });
      } else {
        GetById(id).then(fetchedUser => {
          EncryptHelper.compare(password, fetchedUser.password).then(status => {
            if(!status) {
              const err = new APIError('Old Password isn\'t correct', httpStatus.BAD_REQUEST);
              reject({
                status: httpStatus.BAD_REQUEST,
                err,
              });
            } else {
              EncryptHelper.encrypt(newPassword) 
              .then(hashedPassword => {
                CRUD.updateById(id, { password: hashedPassword }, user).then(updatedUser => {
                  resolve({ status: true });
                })
                .catch(e => reject(e));
              })
              .catch(e => reject(e))
            }
          })
          .catch(e => reject(e))
        })
        .catch(e => reject(e))
      }
    } else if(attribute === 'email') {
      const { email, newEmail, confirmNewEmail } = userBody;
      if(newEmail !== confirmNewEmail) {
        const err = new APIError('Emails don\'t match', httpStatus.BAD_REQUEST);
        reject({
          status: httpStatus.BAD_REQUEST,
          err,
        });
      } else {
        ifAttributeExists({ email: newEmail }, 'email', id).then(data => {
          if(!!(_get(data, 'status'))) {
            reject({
              status: httpStatus.BAD_REQUEST,
              err: _get(data, 'err'),
            });
          } else {
            GetOne({ email }).then(fetchedUser => {
              if(!!fetchedUser) {
                CRUD.updateById(id, { email: newEmail }, user).then(updatedUser => {
                  resolve({ status: true });
                })
                .catch(e => reject(e));
              } else {
                const err = new APIError('Old email isn\'t correct', httpStatus.BAD_REQUEST);
                reject({
                  status: httpStatus.BAD_REQUEST,
                  err,
                });
              }
            })
            .catch(e => reject(e));
          }
        })
        .catch(e => reject(e));
      }
    }
  });
}

function Delete(id, user = null) {
  return CRUD.update(id, { deleted: true, deletedAt: new Date() }, user);
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



function incrementStat(id, type, value) {
  return UpdateById(id, { $inc: { [type]: value } }, null, true);
}

export default { GetById, GetOne, Get, Create, Update, ChangeSecretInformation, Delete, Remove, UpdateById, incrementStat };
