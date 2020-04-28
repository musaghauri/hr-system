/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import ProjectHelper from '../helpers/Project.js';
/**
 * Get new project
 * @returns {Project}
 */
function get(req, res) {
  const { projectId } = req.params;
  const { populate = true } = req.query;
  let populateQuery = [];
  if (populate === true){
    populateQuery = [
      {
        path: 'employees',
        model: 'User',
      },
    ];
  }
  ProjectHelper.GetById(projectId, populateQuery)
    .then(project => {
      res.json(project);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new project
 * @returns {Project}
 */
function create(req, res) {
  const projectBody = req.body;
  ProjectHelper.Create(projectBody, req.user)
    .then(project => {
      res.json(project);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

function list(req, res) {
  const populateQuery = [
    {
      path: 'employees',
      model: 'User',
    },
  ];
  const params = {
    limit: _get(req.query, 'limit', 0),
    skip: _get(req.query, 'skip', 0),
    order: _get(req.query, 'order', 'asc'),
    sort: _get(req.query, 'sort', 'title'),
    query: _omit(req.query, ['limit', 'skip', 'order', 'sort']),
  };
  ProjectHelper.Get(params, populateQuery)
    .then(projects => {
      const { items, total_count } = projects;
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
 * Update project
 * @returns {Project}
 */
function update(req, res) {
  const { projectId } = req.params;
  const projectBody = req.body;
  ProjectHelper.UpdateById(projectId, projectBody, req.user)
    .then(project => {
      res.json(project);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove project.
 * @returns {Project}
 */
function removeHard(req, res) {
  const projectId = _get(req.params, 'projectId');
  ProjectHelper.Remove(projectId)
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
