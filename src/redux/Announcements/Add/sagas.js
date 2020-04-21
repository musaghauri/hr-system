import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_ANNOUNCEMENT } from './constants';
import { addAnnouncementSuccess, addAnnouncementFail } from './actions';

export function* addAnnouncement(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements`;
  const requestBody = action.announcementInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const announcement = yield call(request, requestURL, options);
  if (!announcement.err) {
    yield put(addAnnouncementSuccess(announcement.data));
  } else {
    yield put(addAnnouncementFail(announcement.err.reason));
  }
}

export default function* addAnnouncementWatcher() {
  yield takeLatest(ADD_ANNOUNCEMENT, addAnnouncement);
}
