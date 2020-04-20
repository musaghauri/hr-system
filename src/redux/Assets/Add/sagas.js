import { call, put, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { ADD_ASSET } from './constants';
import { addAssetSuccess, addAssetFail } from './actions';

export function* addAsset(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets`;
  const requestBody = action.assetInfo;
  const options = createRequestOptions('POST', requestBody, requestHeader);
  const asset = yield call(request, requestURL, options);
  if (!asset.err) {
    yield put(addAssetSuccess(asset.data));
  } else {
    yield put(addAssetFail(asset.err.reason));
  }
}

export default function* addAssetWatcher() {
  yield takeLatest(ADD_ASSET, addAsset);
}
