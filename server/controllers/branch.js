/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import BranchHelper from '../helpers/Branch';
/**
 * Get new branch
 * @returns {Branch}
 */
function get(req, res) {
  const { branchId } = req.params;
  const populateQuery = [
      {
          path: "city",
          model: "City",
          populate: {
            path: 'state',
            model: 'State',
            populate: {
              path: 'country',
              model: 'Country',
          },    
        },
      },
      {
        path: "departments",
        model: "Department",
      }
    ];
  BranchHelper.GetById(branchId, populateQuery)
    .then(branch => {
      res.json(branch);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new branch
 * @returns {Branch}
 */
function create(req, res) {
  const branchBody = req.body;
  BranchHelper.Create(branchBody, req.user)
    .then(branch => {
      res.json(branch);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
    const populateQuery = [
        {
            path: "city",
            model: "City",
            populate: {
              path: 'state',
              model: 'State',
              populate: {
                path: 'country',
                model: 'Country',
            },    
          },
        },
        {
          path: "departments",
          model: "Department",
        }
      ];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'city'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  BranchHelper.Get(params, populateQuery)
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
 * Update branch
 * @returns {Branch}
 */
function update(req, res) {
  const { branchId } = req.params;
  const branchBody = req.body;
  BranchHelper.UpdateById(branchId, branchBody, req.user)
    .then(branch => {
      res.json(branch);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove branch.
 * @returns {Branch}
 */
function removeHard(req, res) {
  const branchId = _get(req.params, 'branchId');
  BranchHelper.Remove(branchId)
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
