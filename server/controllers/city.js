/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import CityHelper from '../helpers/City';
/**
 * Get new city
 * @returns {City}
 */
function get(req, res) {
  const { cityId } = req.params;
  const { populate = true } = req.query;
  let populateQuery = [];
  console.log({ populate });
  if (populate === true)
    populateQuery = [
      {
        path: 'state',
        model: 'State',
        populate: {
          path: 'country',
          model: 'Country',
        },
      },
    ];
  CityHelper.GetById(cityId, populateQuery)
    .then(city => {
      res.json(city);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new city
 * @returns {City}
 */
function create(req, res) {
  const cityBody = req.body;
  CityHelper.Create(cityBody, req.user)
    .then(city => {
      res.json(city);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const populateQuery = [
    {
      path: 'state',
      model: 'State',
      populate: {
        path: 'country',
        model: 'Country',
      },
    },
  ];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'name'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  CityHelper.Get(params, populateQuery)
    .then(cities => {
      const { items, total_count } = cities;
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
 * Update city
 * @returns {City}
 */
function update(req, res) {
  const { cityId } = req.params;
  const cityBody = req.body;
  CityHelper.UpdateById(cityId, cityBody, req.user)
    .then(city => {
      res.json(city);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove city.
 * @returns {City}
 */
function removeHard(req, res) {
  const cityId = _get(req.params, 'cityId');
  CityHelper.Remove(cityId)
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
