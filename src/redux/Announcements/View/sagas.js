import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_ANNOUNCEMENT } from './constants';
import { getAnnouncementSuccess, getAnnouncementFail } from './actions';

export function* getAnnouncement(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const announcement = yield call(request, requestURL, options);
  if (!announcement.err) {
    yield put(getAnnouncementSuccess(announcement.data));
  } else {
    yield put(getAnnouncementFail(announcement.err.reason));
  }
}

export default function* viewAnnouncementWatcher() {
  yield takeLatest(GET_ANNOUNCEMENT, getAnnouncement);
}
