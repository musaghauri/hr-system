/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import PermissionHelper from '../helpers/Permission';
/**
 * Get new permission
 * @returns {Permission}
 */
function get(req, res) {
  const { permissionId } = req.params;
  const populateQuery = [];
  PermissionHelper.GetById(permissionId, populateQuery)
    .then(permission => {
      res.json(permission);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new permission
 * @returns {Permission}
 */
function create(req, res) {
  const permissionBody = req.body;
  PermissionHelper.Create(permissionBody, req.user)
    .then(permission => {
      res.json(permission);
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
  PermissionHelper.Get(params)
    .then(permissions => {
      const { items, total_count } = permissions;
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
 * Update permission
 * @returns {Permission}
 */
function update(req, res) {
  const { permissionId } = req.params;
  const permissionBody = req.body;
  PermissionHelper.UpdateById(permissionId, permissionBody, req.user)
    .then(permission => {
      res.json(permission);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove permission.
 * @returns {Permission}
 */
function removeHard(req, res) {
  const permissionId = _get(req.params, 'permissionId');
  PermissionHelper.Remove(permissionId)
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
