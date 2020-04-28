import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { DELETE_ASSET, GET_ASSETS } from './constants';
import {
  deleteAssetFail,
  deleteAssetSuccess,
  getAssetsSuccess,
  getAssetsFail,
} from './actions';

export function* deleteAsset(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets/${action.id}`;
  const options = createRequestOptions('DELETE', null, requestHeader);
  const status = yield call(request, requestURL, options);
  if (!status.err) {
    yield put(deleteAssetSuccess(action.index));
  } else {
    yield put(deleteAssetFail(status.err.reason));
  }
}

export function* getAssets() {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets`;
  const options = createRequestOptions('GET', null, requestHeader);
  const assets = yield call(request, requestURL, options);
  if (!assets.err) {
    yield put(getAssetsSuccess(assets.data));
  } else {
    yield put(getAssetsFail(assets.err.reason));
  }
}

export default function* assetsListWatcher() {
  yield takeLatest(DELETE_ASSET, deleteAsset);
  yield takeLatest(GET_ASSETS, getAssets);
}
