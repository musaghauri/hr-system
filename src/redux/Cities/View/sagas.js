import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_CITY } from './constants';
import { getCitySuccess, getCityFail } from './actions';

export function* getCity(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/cities/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const city = yield call(request, requestURL, options);
  if (!city.err) {
    yield put(getCitySuccess(city.data));
  } else {
    yield put(getCityFail(city.err.reason));
  }
}

export default function* citiesListWatcher() {
  yield takeLatest(GET_CITY, getCity);
}
