/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import WishHelper from '../helpers/Wish';
/**
 * Get new wish
 * @returns {Wish}
 */
function get(req, res) {
  const { wishId } = req.params;
  const populateQuery = [];
  WishHelper.GetById(wishId, populateQuery)
    .then(wish => {
      res.json(wish);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new wish
 * @returns {Wish}
 */
function create(req, res) {
  const wishBody = req.body;
  WishHelper.Create(wishBody, req.user)
    .then(wish => {
      res.json(wish);
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
  WishHelper.Get(params)
    .then(wishlist => {
      const { items, total_count } = wishlist;
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
 * Update wish
 * @returns {Wish}
 */
function update(req, res) {
  const { wishId } = req.params;
  const wishBody = req.body;
  WishHelper.UpdateById(wishId, wishBody, req.user)
    .then(wish => {
      res.json(wish);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove wish.
 * @returns {Wish}
 */
function removeHard(req, res) {
  const wishId = _get(req.params, 'wishId');
  WishHelper.Remove(wishId)
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
