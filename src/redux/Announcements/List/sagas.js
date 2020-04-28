import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_ANNOUNCEMENT, GET_ANNOUNCEMENTS } from './constants';
import {
  deleteAnnouncementFail,
  deleteAnnouncementSuccess,
  getAnnouncementsSuccess,
  getAnnouncementsFail,
} from './actions';

export function* deleteAnnouncement(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteAnnouncementSuccess(action.index));
  } else {
    yield put(deleteAnnouncementFail(status.err.reason));
  }
}

export function* getAnnouncements() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements`;
  const options = createRequestOptions('GET', null, requestHeader);
  const announcements = yield call(request, requestURL, options);
  if (!announcements.err) {
    yield put(getAnnouncementsSuccess(announcements.data));
  } else {
    yield put(getAnnouncementsFail(announcements.err.reason));
  }
}

export default function* announcementsListWatcher() {
  yield takeLatest(DELETE_ANNOUNCEMENT, deleteAnnouncement);
  yield takeLatest(GET_ANNOUNCEMENTS, getAnnouncements);
}
