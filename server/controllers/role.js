/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import RoleHelper from '../helpers/Role';
/**
 * Get new role
 * @returns {Role}
 */
function get(req, res) {
  const { roleId } = req.params;
  const populateQuery = [];
  RoleHelper.GetById(roleId, populateQuery)
    .then(role => {
      res.json(role);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new role
 * @returns {Role}
 */
function create(req, res) {
  const roleBody = req.body;
  RoleHelper.Create(roleBody, req.user)
    .then(role => {
      res.json(role);
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
  RoleHelper.Get(params)
    .then(roles => {
      const { items, total_count } = roles;
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
 * Update role
 * @returns {Role}
 */
function update(req, res) {
  const { roleId } = req.params;
  const roleBody = req.body;
  RoleHelper.UpdateById(roleId, roleBody, req.user)
    .then(role => {
      res.json(role);
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
};
