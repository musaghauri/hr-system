import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_WISH } from './constants';
import { getWishSuccess, getWishFail } from './actions';

export function* getWish(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const wish = yield call(request, requestURL, options);
  if (!wish.err) {
    yield put(getWishSuccess(wish.data));
  } else {
    yield put(getWishFail(wish.err.reason));
  }
}

export default function* viewWishWatcher() {
  yield takeLatest(GET_WISH, getWish);
}
