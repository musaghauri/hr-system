/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import PriorityHelper from '../helpers/Priority';
/**
 * Get new priority
 * @returns {Priority}
 */
function get(req, res) {
  const { priorityId } = req.params;
  const populateQuery = [];
  PriorityHelper.GetById(priorityId, populateQuery)
    .then(priority => {
      res.json(priority);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new priority
 * @returns {Priority}
 */
function create(req, res) {
  const priorityBody = req.body;
  PriorityHelper.Create(priorityBody, req.user)
    .then(priority => {
      res.json(priority);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'name'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  PriorityHelper.Get(params)
    .then(priorities => {
      const { items, total_count } = priorities;
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
 * Update priority
 * @returns {Priority}
 */
function update(req, res) {
  const { priorityId } = req.params;
  const priorityBody = req.body;
  PriorityHelper.UpdateById(priorityId, priorityBody, req.user)
    .then(priority => {
      res.json(priority);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove priority.
 * @returns {Priority}
 */
function removeHard(req, res) {
  const priorityId = _get(req.params, 'priorityId');
  PriorityHelper.Remove(priorityId)
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
