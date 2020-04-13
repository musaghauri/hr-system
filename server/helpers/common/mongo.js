/* eslint-disable */
// import Promise from 'bluebird';
import _cloneDeep from 'lodash/cloneDeep';
import _omit from 'lodash/omit';
import _get from 'lodash/get';
import _extend from 'lodash/extend';


export default class MONGO {

  constructor(model) {
    this.model = model;
  }


  findOne(query, populate) {
    return new Promise((resolve, reject) => {
      const mongoQuery = !!populate ?
        this.model.findOne(query).populate(populate) : this.model.findOne(query);
      mongoQuery.exec().then(result => {
          resolve(result);
      })
      .catch(e => reject(e));
    });
  }


  find(query, skip, limit, sort, order, populate) {
    return new Promise((resolve, reject) => {
      const mongoQuery = !!populate ?
        this.model.find(query).populate(populate) : this.model.find(query);
      mongoQuery.skip(skip).limit(limit).sort({[sort]: order === 'asc'? 1: -1})
        .exec().then(result => {
          resolve(result);
      })
      .catch(e => reject(e));
    });
  }


  findByIdAndUpdate(id, updatedBody) {
    return new Promise((resolve, reject) => {
      this.model.findByIdAndUpdate(id, updatedBody, {new: true})
        .exec().then(result => {
          resolve(result);
      })
      .catch(e => reject(e));
    });
  }


  count(query, isAggregate) {
    return new Promise((resolve, reject) => {
      if(isAggregate) {
        let newQuery = _cloneDeep(query);
        newQuery.push({ $count: "total_count" });
        this.model.aggregate(newQuery).then(result => {
          if(result.length > 0) resolve(result[0]['total_count']);
          else resolve(0);
        })
        .catch(e => reject(e));
      } else {
        this.model.countDocuments(query)
          .exec().then(result => {
            resolve(result);
        })
        .catch(e => reject(e));
      }
    });
  }


  insertMany(body) {
    return new Promise((resolve, reject) => {
      this.model.insertMany(body).then(savedObjects => {
          resolve(savedObjects);
      })
      .catch(e => reject(e));
    });
  }

  updateMany(query, objectBody, user) {
    user && _extend(objectBody, { updatedBy: _get(user, '_id'), updatedAt: new Date() });
    return new Promise((resolve, reject) => {
      this.model.updateMany(query, { $set: objectBody }).then(updatedObjects => {
        resolve(updatedObjects)
      })
      .catch(e => reject(e))
    });
  }
  deleteMany(body) {
    return new Promise((resolve, reject) => {
      this.model.deleteMany(body).then(deletedObjects => {
          resolve(deletedObjects);
      })
      .catch(e => reject(e));
    });
  }


  aggregate(query, skip, limit, sort, order, populate, additionalQuery = null, populateName = null) {
    return new Promise((resolve, reject) => {
      let newQuery = _cloneDeep(query); 
      if(!!sort) newQuery.push({ $sort: { [sort]: order === 'asc' ? 1: -1 }});
      if(!!additionalQuery) additionalQuery.map(q => newQuery.push(q));
      else {
        if(!!skip) newQuery.push({ $skip: skip });
        if(!!limit) newQuery.push({ $limit: limit });
      }
      
      const mongoQuery = this.model.aggregate(newQuery);
      mongoQuery.exec()
      .then(results => {
        if(!!populate) {
          if(!!results[0] && !!results[0][populateName]) {
            const newResults = _omit(results[0], [populateName]);
            this.model.populate(results[0][populateName], populate)
            .then(populatedResults => {
              resolve({
                [populateName]: populatedResults,
                ...newResults
              })
            })
            .catch(e => reject(e));
          } else if(results.length > 0) {
            this.model.populate(results, populate)
            .then(populatedResults => resolve(populatedResults))
            .catch(e => reject(e));
          } else {
            if(!!populateName) {
              resolve({
                [populateName]: results
              })
            } else {
              resolve(results);
            }            
          }
        } else {
          resolve(results);
        }
      })
      .catch(e => reject(e));
    });
  }
}

