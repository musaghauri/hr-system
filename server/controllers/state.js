/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import StateHelper from '../helpers/State';
/**
 * Get new state
 * @returns {State}
 */
function get(req, res) {
  const { stateId } = req.params;
  const { populate = true } = req.query;
  let populateQuery = [];
  if (populate === 'true')
    populateQuery = [{ path: 'country', model: 'Country' }];
  StateHelper.GetById(stateId, populateQuery)
    .then(state => {
      res.json(state);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new state
 * @returns {State}
 */
function create(req, res) {
  const stateBody = req.body;
  StateHelper.Create(stateBody, req.user)
    .then(state => {
      res.json(state);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const populateQuery = [{ path: 'country', model: 'Country' }];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'name'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  StateHelper.Get(params, populateQuery)
    .then(states => {
      const { items, total_count } = states;
      res.json({
        items,
        total_count,
      });
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Update state
 * @returns {State}
 */
function update(req, res) {
  const { stateId } = req.params;
  const stateBody = req.body;
  StateHelper.UpdateById(stateId, stateBody, req.user)
    .then(state => {
      res.json(state);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove state.
 * @returns {State}
 */
function removeHard(req, res) {
  const stateId = _get(req.params, 'stateId');
  StateHelper.Remove(stateId)
    .then(response => {
      res.json(response);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

export default {
  create,
  list,
  get,
  update,
  removeHard,
};
