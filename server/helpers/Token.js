/* eslint-disable */
import Token from '../models/token';

import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';

const mongoDriver = new MongoHanlder(Token);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Token', activeDriver, mongoDriver);


function GetById(id, populate= ['','']) {
  return CRUD.getById(id, populate);
}

function GetOne(query, populate= ['','']) {
  return CRUD.getOne(query, populate);
}



function UpdateById(tokenId, tokenBody, user = null) {
  return CRUD.updateById(tokenId, tokenBody, user)
}


function Create(tokenBody, user = null) {
  return CRUD.create(Token, tokenBody, user)
}

function Update(tokenId, tokenBody, user = null) {
  return new Promise((resolve, reject) => {
    return CRUD.update(tokenId, tokenBody, user);
  });
}


function Delete(id, user = null) {
  return CRUD.update(id, { deleted: true, deletedAt: new Date() }, user);
}

function Remove(id, user = null) {
  return CRUD.remove(id, user);
}

export default { GetById, GetOne, Create, Update, Delete, Remove, UpdateById };
