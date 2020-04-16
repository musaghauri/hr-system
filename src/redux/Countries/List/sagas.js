import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_COUNTRY, GET_COUNTRIES } from './constants';
import {
  deleteCountryFail,
  deleteCountrySuccess,
  getCountriesSuccess,
  getCountriesFail,
} from './actions';

export function* deleteCountry(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteCountrySuccess(action.index));
  } else {
    yield put(deleteCountryFail(status.err.reason));
  }
}

export function* getCountries() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/countries`;
  const options = createRequestOptions('GET', null, requestHeader);
  const countries = yield call(request, requestURL, options);
  if (!countries.err) {
    yield put(getCountriesSuccess(countries.data));
  } else {
    yield put(getCountriesFail(countries.err.reason));
  }
}

export default function* countriesListWatcher() {
  yield takeLatest(DELETE_COUNTRY, deleteCountry);
  yield takeLatest(GET_COUNTRIES, getCountries);
}
