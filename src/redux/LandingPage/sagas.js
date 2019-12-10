// import { call, put, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
// import Router from 'next/router';
// import { createRequestOptions } from 'utils/helperFuncs';
// import { NEXT_API_URL } from 'config';
// import cookie from 'utils/cookie';
// import { LOGIN_USER } from './constants';
// import { loginUserFail } from './actions';

// export function* loginUser(action) {
//   const requestURL = `${NEXT_API_URL}/auth/login`;
//   const requestBody = action.loginUserInfo;
//   const options = createRequestOptions('POST', requestBody);
//   const user = yield call(request, requestURL, options);
//   if (!user.err) {
//     cookie.saveAuthCookie(user.data);
//     yield put(Router.replace('/'));
//   } else {
//     yield put(loginUserFail(user.err.reason));
//   }
// }

// export default function* loginUserWatcher() {
//   yield takeLatest(LOGIN_USER, loginUser);
// }
