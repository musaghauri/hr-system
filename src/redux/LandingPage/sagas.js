import { put, takeLatest } from 'redux-saga/effects';
import { INITIATE_CLOCK } from './constants';
import { updateValue } from './actions';

export function* initiateClock() {
  yield put(updateValue(['clock'], 'HR System'));
}

export default function* landingPageUserWatcher() {
  yield takeLatest(INITIATE_CLOCK, initiateClock);
}
