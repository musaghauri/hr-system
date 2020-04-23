import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from '@utils/request';
import { createRequestOptions, loadFormDetails } from '@utils/helperFuncs';
import { NEXT_API_URL } from '@config';
import cookie from '@utils/cookie';
import { EDIT_WISH, GET_WISH, GET_PRIORITIES } from './constants';
import {
  getWishSuccess,
  getWishFail,
  editWishSuccess,
  editWishFail,
  getPrioritiesSuccess,
  getPrioritiesFail,
} from './actions';
import { selectFormDetails } from './selectors';

export function* getWish(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist/${action.id}`;
  const options = createRequestOptions('GET', null, requestHeader);
  const wish = yield call(request, requestURL, options);
  const FORMDETAILS = yield select(selectFormDetails());
  if (!wish.err) {
    const formDetails = yield loadFormDetails(
      FORMDETAILS.toJS(),
      {
        _id: wish.data._id,
        name: wish.data.name,
        description: wish.data.description,
        priority: wish.data.priority._id,
      }
    );
    yield put(getWishSuccess(formDetails));
  } else {
    yield put(getWishFail(wish.err.reason));
  }
}
export function* getPriorities() {
  const requestURL = `${NEXT_API_URL}/priorities`;
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

export function* editWish(action) {
  const token = cookie.loadAuthCookie('token');
  const requestHeader = { authorization: `Bearer ${token}` };
  const requestURL = `${NEXT_API_URL}/wishlist/${action.id}`;
  const requestBody = action.wishInfo;
  const options = createRequestOptions('PUT', requestBody, requestHeader);
  const wish = yield call(request, requestURL, options);
  if (!wish.err) {
    yield put(editWishSuccess(wish.data));
  } else {
    yield put(editWishFail(wish.err.reason));
  }
}

export default function* editWishWatcher() {
  yield takeLatest(GET_WISH, getWish);
  yield takeLatest(EDIT_WISH, editWish);
  yield takeLatest(GET_PRIORITIES, getPriorities);
}
