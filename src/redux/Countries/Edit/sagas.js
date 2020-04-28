import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_COUNTRY, GET_COUNTRY } from './constants';
import {
  getCountrySuccess,
  getCountryFail,
  editCountrySuccess,
  editCountryFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getCountry(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const country = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!country.err) {
    const formDetails = yield loadFormDetails(FORMDETAILS.toJS(), country.data);
    yield put(getCountrySuccess(formDetails));
  } else {
    yield put(getCountryFail(country.err.reason));
  }
}

export function* editCountry(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries/${action.id}`;
  const requestBody = action.countryInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const country = yield call(request, requestURL, options);
  if (!country.err) {
    yield put(editCountrySuccess(country.data));
  } else {
    yield put(editCountryFail(country.err.reason));
  }
}

export default function* editCountryWatcher() {
  yield takeLatest(GET_COUNTRY, getCountry);
  yield takeLatest(EDIT_COUNTRY, editCountry);
}
