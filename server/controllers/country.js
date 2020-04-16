/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import CountryHelper from '../helpers/Country';
/**
 * Get new country
 * @returns {Country}
 */
function get(req, res) {
  const { countryId } = req.params;
  const populateQuery = [];
  CountryHelper.GetById(countryId, populateQuery)
    .then(country => {
      res.json(country);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new country
 * @returns {Country}
 */
function create(req, res) {
  const countryBody = req.body;
  CountryHelper.Create(countryBody, req.user)
    .then(country => {
      res.json(country);
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
  CountryHelper.Get(params)
    .then(countries => {
      const { items, total_count } = countries;
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
 * Update country
 * @returns {Country}
 */
function update(req, res) {
  const { countryId } = req.params;
  const countryBody = req.body;
  CountryHelper.UpdateById(countryId, countryBody, req.user)
    .then(country => {
      res.json(country);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove country.
 * @returns {Country}
 */
function removeHard(req, res) {
  const countryId = _get(req.params, 'countryId');
  CountryHelper.Remove(countryId)
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
