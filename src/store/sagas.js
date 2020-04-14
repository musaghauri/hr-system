import { fork, all } from 'redux-saga/effects';
import landingPageSagas from '@redux/LandingPage/sagas';
import loginSagas from '@redux/Auth/Login/sagas';

export default function* mainSagas() {
  yield all([fork(landingPageSagas), fork(loginSagas)]);
}
