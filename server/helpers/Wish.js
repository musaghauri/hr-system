/* eslint-disable */
import Wishlist from '../models/wishlist';
import _startCase from 'lodash/startCase';
import _get from 'lodash/get';
import MongoHanlder from './common/mongo';
import CrudHandler from './common/crud';

const mongoDriver = new MongoHanlder(Wishlist);
const activeDriver = mongoDriver;

const CRUD = new CrudHandler('Wishlist', activeDriver, mongoDriver);

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

function UpdateById(wishId, wishBody, user = null) {
  return CRUD.updateById(wishId, wishBody, user);
}

function Create(wishBody, user = null) {
  return CRUD.create(Wishlist, wishBody, user);
}


function Remove(id, user = null) {
  return CRUD.remove(id, user);
}


export default { Create, GetOne, UpdateById, GetById, Get, Remove };
