import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_ASSET, GET_ASSET } from './constants';
import {
  getAssetSuccess,
  getAssetFail,
  editAssetSuccess,
  editAssetFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getAsset(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets/${action.id}?populate=false`;
  const options = createRequestOptions('GET', null, requestHeader);
  const asset = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!asset.err) {
    const formDetails = yield loadFormDetails(FORMDETAILS.toJS(), asset.data);
    yield put(getAssetSuccess(formDetails));
  } else {
    yield put(getAssetFail(asset.err.reason));
  }
}

export function* editAsset(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/assets/${action.id}`;
  const requestBody = action.assetInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const asset = yield call(request, requestURL, options);
  if (!asset.err) {
    yield put(editAssetSuccess(asset.data));
  } else {
    yield put(editAssetFail(asset.err.reason));
  }
}

export default function* editAssetWatcher() {
  yield takeLatest(GET_ASSET, getAsset);
  yield takeLatest(EDIT_ASSET, editAsset);
}
