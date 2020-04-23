import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_WISH, GET_WISHLIST } from './constants';
import {
  deleteWishFail,
  deleteWishSuccess,
  getWishlistSuccess,
  getWishlistFail,
} from './actions';

export function* deleteWish(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteWishSuccess(action.index));
  } else {
    yield put(deleteWishFail(status.err.reason));
  }
}

export function* getWishlist() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist`;
  const options = createRequestOptions('GET', null, requestHeader);
  const wishlist = yield call(request, requestURL, options);
  if (!wishlist.err) {
    yield put(getWishlistSuccess(wishlist.data));
  } else {
    yield put(getWishlistFail(wishlist.err.reason));
  }
}

export default function* wishlistWatcher() {
  yield takeLatest(DELETE_WISH, deleteWish);
  yield takeLatest(GET_WISHLIST, getWishlist);
}
