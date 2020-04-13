/* eslint-disable */
// import Promise from 'bluebird';
import APIError from './APIError';
import httpStatus from 'http-status';
import _assign from 'lodash/assign';
import _extend from 'lodash/extend';
import _cloneDeep from 'lodash/cloneDeep';
import _defaults from 'lodash/defaults';
import _get from 'lodash/get';
import _merge from 'lodash/merge';
import _toString from 'lodash/toString';
import { ROLE_ADMIN } from '@config';

export default class CRUD {
  constructor(modelName, activeDriver, mongoDriver) {
    this.modelName = modelName;
    this.activeDriver = activeDriver;
    this.mongoDriver = mongoDriver;
  }


  /**
   * get document by id
   * @property {string} id - The id of the document to retrieve.
   * @property {boolean} deletedIncluded - Deleted document to include?.
   * @returns {document Object}
   */
  getById(id, populate = null, deletedIncluded = false) {
    return new Promise((resolve, reject) => {
      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        const err = new APIError('Illegal Id format', httpStatus.BAD_REQUEST);
        return reject({
          status: httpStatus.BAD_REQUEST,
          err: err,
        })
      }
      this.getOne({ _id: id }, populate, deletedIncluded).then(data => {
        return resolve(data);
      })
      .catch(e => reject(e));
    });
  }


  getOne(query, populate = null, deletedIncluded = false ) {
    const newQuery = _assign({}, query);
    if(!deletedIncluded) {
      _extend(newQuery, {
        deleted: { $ne: true }
      });
    }
    return new Promise((resolve, reject) => {
      this.activeDriver.findOne(newQuery, populate)
        .then((result) => resolve(result))
        .catch(e => reject(e));
    })
  }

  count(query, deletedIncluded = false, isAggregate = false) {
    let newQuery = _cloneDeep(query);
    if(!isAggregate && !deletedIncluded) {
      newQuery = _assign({}, query);
      _extend(newQuery, {
        deleted:  { $ne: true }
      });
    }

    return new Promise((resolve, reject) => {
      this.activeDriver.count(newQuery, isAggregate)
        .then((result) => {
          resolve(result);
        })
        .catch(e => reject(e));
    })
  }


  _get(query, skip, limit, sort, order, populate = null, deletedIncluded = false, ) {
    const newQuery = _assign({}, query);
    if(!deletedIncluded) {
      _extend(newQuery, {
        deleted:  { $ne: true }
      });
    }
    return new Promise((resolve, reject) => {
      this.activeDriver.find(newQuery, skip, limit, sort, order, populate)
        .then((result) => {
          resolve(result);
        })
        .catch(e => reject(e));
    })
  }

  
  _aggregate(query, skip, limit, sort, order, populate = null, additionalQuery = null, populateName = null) {
    return new Promise((resolve, reject) => {
      this.activeDriver.aggregate(query, skip, limit, sort, order, populate, additionalQuery, populateName)
        .then((result) => {
          resolve(result);
        })
        .catch(e => reject(e));
    })
  }

  get(query, skip, limit, sort, order, populate = null, deletedIncluded = false) {
    return new Promise((resolve, reject) => {
      const promises = [ this._get(query, Number(skip), Number(limit), sort, order, populate, deletedIncluded),
        this.count(query, deletedIncluded)
      ];

      Promise.all(promises).then(results => {
        resolve({
          items: results[0],
          total_count: results[1],
        });
      })
      .catch(e => reject(e));
    });
  }


  aggregate(query, skip, limit, sort, order, populate = null, additionalQuery = null, populateName = null) {
    return new Promise((resolve, reject) => {
      const promises = [ this._aggregate(query, Number(skip), Number(limit), sort, order, populate, additionalQuery, populateName),
        this.count(query, false, true)
      ];

      Promise.all(promises).then(results => {
        resolve({
          items: results[0],
          total_count: results[1],
        });
      })
      .catch(e => reject(e));
    });
  }

  /**
   * creates new document
   * @property {object} model - The schema model of the document.
   * @property {object} objectBody - Object body of the document containing properties.
   * @property {object} user - Creator.
   * @returns {newly created document object}
   */
  create(model, objectBody, user) {
    const newObjectBody = _assign({}, objectBody);
    _defaults(newObjectBody, { createdBy: _get(user, '_id'), createdAt: new Date()});
    return new Promise((resolve, reject) => {
      const object = new model(newObjectBody);
      object.save().then(savedObject => {
        // handleESEvent(object, 'es-indexed');
        resolve(savedObject);
      })
      .catch(e => reject(e));
    });
  }

  createMany(model, objectBody, user) {
    return new Promise((resolve, reject) => {
      this.activeDriver.insertMany(objectBody)
        .then((savedObjects) => {
          resolve(savedObjects);
        })
        .catch(e => reject(e));
    });
  }

  deleteMany(body = {}, user = null) {
    return new Promise((resolve, reject) => {
      this.activeDriver.deleteMany(body)
        .then((deletedObjects) => {
          resolve(deletedObjects);
        })
        .catch(e => reject(e));
    });
  }
  _update(object, objectBody, user) {
    user && _extend(objectBody, { updatedBy: _get(user, '_id'), updatedAt: new Date() });
    _extend(object, _merge(object.toJSON(), objectBody));
    return new Promise((resolve, reject) => {
      object.save().then(updatedObject => {
        // handleESEvent(resObject, 'es-indexed');
        resolve(updatedObject)
      })
      .catch(e => reject(e))
    });
  }

  /**
   * updates document
   * @property {string} id - The id of the document needs to be updated.
   * @property {object} objectBody - Object body of the document containing properties.
   * @property {object} user - Creator.
   * @returns {updated document object}
   */
  update(id, objectBody, user) {
    return new Promise((resolve, reject) => {
      if (user && _get(user, 'role') !== 'admin') {
        this.getById(id).then((resObject) => {
        if (!!resObject) {
          if (_toString(_get(resObject, '_id')) === _get(user, '_id') || _toString(_get(resObject, 'createdBy')) === _get(user, '_id')) {
            this._update(resObject, objectBody, user).then((updatedObject) => {
              resolve(updatedObject);
            })
            .catch(e => reject(e));
          } else {
              const err = new APIError('You are forbidden to do this operation', httpStatus.FORBIDDEN);
              reject({
                status: httpStatus.FORBIDDEN,
                err: err,
              });
          }
        } else {
          const err = new APIError(this.modelName + ' Not Found', httpStatus.NOT_FOUND);
          reject({
            status: httpStatus.NOT_FOUND,
            err: err,
          });
        }
      })
      .catch(e => reject(e));
      } else {
        this.getById(id).then((resObject) => {
          this._update(resObject, objectBody, user).then((updatedObject) => {
            resolve(updatedObject);
          })
          .catch(e => reject(e));
        })
      }
   });
  }

  
  updateByQuery(query, objectBody, user) {
    return new Promise((resolve, reject) => {
      if (user && _get(user, 'role') !== 'admin') {
        if (_toString(_get(resObject, '_id')) === _get(user, '_id') || _toString(_get(resObject, 'createdBy')) === _get(user, '_id')) {
          this.activeDriver.updateMany(query, objectBody, user)
          .then(updatedObjects => resolve(updatedObjects))
          .catch(e => reject(e));
        } else {
            const err = new APIError('You are forbidden to do this operation', httpStatus.FORBIDDEN);
            reject({
              status: httpStatus.FORBIDDEN,
              err: err,
            });
        }
      } else {
        this.activeDriver.updateMany(query, objectBody, user)
        .then(updatedObjects => resolve(updatedObjects))
        .catch(e => reject(e));
      }
   });
  }

  updateById(id, objectBody, user) {
    return new Promise((resolve, reject) => {
      if (user && _get(user, 'role') !== ROLE_ADMIN) {
        this.getById(id).then((resObject) => {
          if (!resObject) {
            const err = new APIError(this.modelName + ' Not Found', httpStatus.NOT_FOUND);
            reject({
              status: httpStatus.NOT_FOUND,
              err: err,
            });
          }

          if (_toString(_get(resObject, '_id')) === _get(user, '_id') || _toString(_get(resObject, 'createdBy')) === _get(user, '_id') || _toString(_get(resObject, 'editor')) === _get(user, '_id')) {
            const newObjectBody = _assign({}, objectBody);
            _extend(newObjectBody, { updatedBy: _get(user, '_id'), updatedAt: new Date() });
            
            this.activeDriver.findByIdAndUpdate(id, newObjectBody).then(res => {
              resolve(res);
            })
            .catch(e => reject(e));
          } else {
            const err = new APIError('You are forbidden to do this operation', httpStatus.FORBIDDEN);
            reject({
              status: httpStatus.FORBIDDEN,
              err: err,
            });
          }
        })
       .catch(e => reject(e));
      } else {
        const newObjectBody = _assign({}, objectBody);
        user && _extend(newObjectBody, { updatedBy: _get(user, '_id'), updatedAt: new Date() });
        this.activeDriver.findByIdAndUpdate(id, newObjectBody).then(res => {
          resolve(res);
        })
        .catch(e => reject(e));
      }
    });

  }


  /**
   * removes document
   * @property {string} id - The id of the document needs to be removed.
   * @property {object} user - Remover.
   * @returns {true incase successs}
   */
  remove(id) {
    return new Promise((resolve, reject) => {
      this.getById(id).then((resObject) => {
        if(resObject) {
          resObject.remove().then((err, res) => {
            // handleESEvent(resObject, 'es-removed');
            resolve(true)
          });
        } else {
          const err = new APIError(this.modelName + ' Not Found', httpStatus.NOT_FOUND);
          reject({
            status: httpStatus.NOT_FOUND,
            err: err,
          });
        }
      })
      .catch(e => reject(e));
    });
  }

  handleESEvent(object, event) {
    object.on(event, (err, res) => {
      if(!err) {
        console.log("Success");
      }
    });
  }

  isUnique(attributeName, attributeValue, exception = null) {
    return new Promise((resolve, reject) => {
        // if the attributeValue is undefined, just by-pass that check
        if(!attributeValue){
          resolve(false);
        }
        const query = exception ? {
          [attributeName] : attributeValue,
          _id: { $ne: exception },
        }: {
          [attributeName] : attributeValue,
        };

        this.getOne(query)
         .then((user) => {
            if(user){
              resolve(true);
            } else {
              resolve(false);
            }
         });
     });
  }

}
