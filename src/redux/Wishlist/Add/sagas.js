import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_WISH, GET_PRIORITIES } from './constants';
import {
  addWishSuccess, 
  addWishFail,
  getPrioritiesSuccess,
  getPrioritiesFail,
} from './actions';

export function* addWish(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist`;
  const requestBody = action.wishInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const wish = yield call(request, requestURL, options);
  if (!wish.err) {
    yield put(addWishSuccess(wish.data));
  } else {
    yield put(addWishFail(wish.err.reason));
  }
}
export function* getPriorities() {
  // const token = cookie.loadAuthCookie('token');
  // const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/priorities`;
  // const options = createRequestOptions('GET', null, requestHeader);
  const priorities = yield call(request, requestURL);
  if (!priorities.err) {
    yield put(getPrioritiesSuccess(
        priorities.data.items.map(priority_ => ({
          key: `priority_${priority_._id}`,
          value: priority_._id,
          text: priority_.name,
        }))
      ));
  } else {
    yield put(getPrioritiesFail(priorities.err.reason));
  }
}

export default function* addWishWatcher() {
  yield takeLatest(ADD_WISH, addWish);
  yield takeLatest(GET_PRIORITIES, getPriorities);
}
