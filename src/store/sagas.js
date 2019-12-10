import { fork, all } from 'redux-saga/effects';
import landingPageSagas from '@redux/LandingPage/sagas';

export default function* mainSagas() {
  yield all([fork(landingPageSagas)]);
}
