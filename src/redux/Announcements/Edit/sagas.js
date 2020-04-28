import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_ANNOUNCEMENT, GET_ANNOUNCEMENT } from './constants';
import {
  getAnnouncementSuccess,
  getAnnouncementFail,
  editAnnouncementSuccess,
  editAnnouncementFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getAnnouncement(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const announcement = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!announcement.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      announcement.data
    );
    yield put(getAnnouncementSuccess(formDetails));
  } else {
    yield put(getAnnouncementFail(announcement.err.reason));
  }
}

export function* editAnnouncement(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/announcements/${action.id}`;
  const requestBody = action.announcementInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const announcement = yield call(request, requestURL, options);
  if (!announcement.err) {
    yield put(editAnnouncementSuccess(announcement.data));
  } else {
    yield put(editAnnouncementFail(announcement.err.reason));
  }
}

export default function* editAnnouncementWatcher() {
  yield takeLatest(GET_ANNOUNCEMENT, getAnnouncement);
  yield takeLatest(EDIT_ANNOUNCEMENT, editAnnouncement);
}
