import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_COUNTRY } from './constants';
import { addCountrySuccess, addCountryFail } from './actions';

export function* addCountry(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries`;
  const requestBody = action.countryInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const country = yield call(request, requestURL, options);
  if (!country.err) {
    yield put(addCountrySuccess(country.data));
  } else {
    yield put(addCountryFail(country.err.reason));
  }
}

export default function* addCountryWatcher() {
  yield takeLatest(ADD_COUNTRY, addCountry);
}
