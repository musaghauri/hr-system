/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import WishlistHelper from '../helpers/Wishlist';
/**
 * Get new wishlist
 * @returns {Wishlist}
 */
function get(req, res) {
  const { wishlistId } = req.params;
  const populateQuery = [
    {
      path: 'priority',
      model: 'Priority',
    },
  ];
  WishlistHelper.GetById(wishlistId, populateQuery)
    .then(wishlist => {
      res.json(wishlist);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new wishlist
 * @returns {Wishlist}
 */
function create(req, res) {
  const wishlistBody = req.body;
  WishlistHelper.Create(wishlistBody, req.user)
    .then(wishlist => {
      res.json(wishlist);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const populateQuery = [
    {
      path: 'priority',
      model: 'Priority',
    },
  ];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'name'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  WishlistHelper.Get(params, populateQuery)
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
 * Update wishlist
 * @returns {Wishlist}
 */
function update(req, res) {
  const { wishlistId } = req.params;
  const wishlistBody = req.body;
  WishlistHelper.UpdateById(wishlistId, wishlistBody, req.user)
    .then(wishlist => {
      res.json(wishlist);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove wishlist.
 * @returns {Wishlist}
 */
function removeHard(req, res) {
  const wishlistId = _get(req.params, 'wishlistId');
  WishlistHelper.Remove(wishlistId)
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
