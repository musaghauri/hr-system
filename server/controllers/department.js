/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import DepartmentHelper from '../helpers/Department.js';
/**
 * Get new department
 * @returns {Department}
 */
function get(req, res) {
  const { departmentId } = req.params;
  const populateQuery = [];
  DepartmentHelper.GetById(departmentId, populateQuery)
    .then(department => {
      res.json(department);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new department
 * @returns {Department}
 */
function create(req, res) {
  const departmentBody = req.body;
  DepartmentHelper.Create(departmentBody, req.user)
    .then(department => {
      res.json(department);
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
    sort: _get(req.query, 'sort', 'title'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  DepartmentHelper.Get(params)
    .then(departments => {
      const { items, total_count } = departments;
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
 * Update department
 * @returns {Department}
 */
function update(req, res) {
  const { departmentId } = req.params;
  const departmentBody = req.body;
  DepartmentHelper.UpdateById(departmentId, departmentBody, req.user)
    .then(department => {
      res.json(department);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove department.
 * @returns {Department}
 */
function removeHard(req, res) {
  const departmentId = _get(req.params, 'departmentId');
  DepartmentHelper.Remove(departmentId)
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
