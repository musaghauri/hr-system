/* eslint-disable camelcase */
import httpStatus from 'http-status';
import _get from 'lodash/get';
import _omit from 'lodash/omit';

import AnnouncementHelper from '../helpers/Announcement';
/**
 * Get new announcement
 * @returns {Announcement}
 */
function get(req, res) {
  const { announcementId } = req.params;
  const populateQuery = [];
  AnnouncementHelper.GetById(announcementId, populateQuery)
    .then(announcement => {
      res.json(announcement);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}
/**
 * Create new announcement
 * @returns {Announcement}
 */
function create(req, res) {
  const announcementBody = req.body;
  AnnouncementHelper.Create(announcementBody, req.user)
    .then(announcement => {
      res.json(announcement);
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
  AnnouncementHelper.Get(params)
    .then(announcements => {
      const { items, total_count } = announcements;
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
 * Update announcement
 * @returns {Announcement}
 */
function update(req, res) {
  const { announcementId } = req.params;
  const announcementBody = req.body;
  AnnouncementHelper.UpdateById(announcementId, announcementBody, req.user)
    .then(announcement => {
      res.json(announcement);
    })
    .catch(e => {
      const { status = httpStatus.INTERNAL_SERVER_ERROR, err = e } = e;
      res.status(status).send(err);
    });
}

/**
 * Remove announcement.
 * @returns {Announcement}
 */
function removeHard(req, res) {
  const announcementId = _get(req.params, 'announcementId');
  AnnouncementHelper.Remove(announcementId)
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
