import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { GET_ASSET } from './constants';
import { getAssetSuccess, getAssetFail } from './actions';

export function* getAsset(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const asset = yield call(request, requestURL, options);
  if (!asset.err) {
    yield put(getAssetSuccess(asset.data));
  } else {
    yield put(getAssetFail(asset.err.reason));
  }
}

export default function* assetsListWatcher() {
  yield takeLatest(GET_ASSET, getAsset);
}
