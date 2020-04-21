/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import AssetHelper from '../helpers/Asset';
/**
 * Get new asset
 * @returns {Asset}
 */
function get(req, res) {
  const { assetId } = req.params;
  const { populate = true } = req.query;
  let populateQuery = [];
  if (populate === true) populateQuery = [{ path: 'usedBy', model: 'User' }];
  AssetHelper.GetById(assetId, populateQuery)
    .then(asset => {
      res.json(asset);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new asset
 * @returns {Asset}
 */
function create(req, res) {
  const assetBody = req.body;
  console.log(assetBody);
  AssetHelper.Create(assetBody, req.user)
    .then(asset => {
      res.json(asset);
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
  AssetHelper.Get(params)
    .then(assets => {
      const { items, total_count } = assets;
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
 * Update asset
 * @returns {Asset}
 */
function update(req, res) {
  const { assetId } = req.params;
  const assetBody = req.body;
  AssetHelper.UpdateById(assetId, assetBody, req.user)
    .then(asset => {
      res.json(asset);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove asset
 * @returns {Assset}
 */
function removeHard(req, res) {
  const assetId = _get(req.params, 'assetId');
  AssetHelper.Remove(assetId)
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
