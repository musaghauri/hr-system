/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import EmployeeHelper from '../helpers/Employee.js';
/**
 * Get new employee
 * @returns {Employee}
 */
function get(req, res) {
  const { employeeId } = req.params;
  const { populate = true } = req.query;
  const populateQuery = [
    {
      path: 'personalInformation.city',
      model: 'City',
      populate: {
        path: 'state',
        model: 'State',
        populate: {
          path: 'country',
          model: 'Country',
        },
      },
    },
  ];
  if (populate === true)
    populateQuery.push(
      {
        path: 'role',
        model: 'Role',
      },
      {
        path: 'personalInformation.domicile',
        model: 'City',
      },
      {
        path: 'personalInformation.nationality',
        model: 'Country',
      },
      {
        path: 'officialInformation.department',
        model: 'Department',
      },
      {
        path: 'companyAssets.id',
        model: 'Asset',
      }
    );
  console.log({ populateQuery });
  EmployeeHelper.GetById(employeeId, populateQuery)
    .then(employee => {
      res.json(employee);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new employee
 * @returns {Employee}
 */
function create(req, res) {
  const employeeBody = req.body;
  EmployeeHelper.Create(employeeBody, req.user)
    .then(employee => {
      res.json(employee);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const populateQuery = [
    {
      path: 'personalInformation.city',
      model: 'City',
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
      path: 'officialInformation.department',
      model: 'Department',
    },
  ];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'title'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  EmployeeHelper.Get(params, populateQuery)
    .then(employees => {
      const { items, total_count } = employees;
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
 * Update employee
 * @returns {Employee}
 */
function update(req, res) {
  const { employeeId } = req.params;
  const employeeBody = req.body;
  EmployeeHelper.UpdateById(employeeId, employeeBody, req.user)
    .then(employee => {
      res.json(employee);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove employee.
 * @returns {Employee}
 */
function removeHard(req, res) {
  const employeeId = _get(req.params, 'employeeId');
  EmployeeHelper.Remove(employeeId)
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
