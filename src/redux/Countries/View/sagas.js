import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_COUNTRY } from './constants';
import { getCountrySuccess, getCountryFail } from './actions';

export function* getCountry(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const country = yield call(request, requestURL, options);
  if (!country.err) {
    yield put(getCountrySuccess(country.data));
  } else {
    yield put(getCountryFail(country.err.reason));
  }
}

export default function* countriesListWatcher() {
  yield takeLatest(GET_COUNTRY, getCountry);
}
