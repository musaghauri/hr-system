import { fork, all } from 'redux-saga/effects';
import landingPageSagas from '@redux/LandingPage/sagas';
import loginSagas from '@redux/Auth/Login/sagas';
import permissionsListSagas from '@redux/Permissions/List/sagas';
import viewPermissionSagas from '@redux/Permissions/View/sagas';
import addPermissionSagas from '@redux/Permissions/Add/sagas';
import editPermissionSagas from '@redux/Permissions/Edit/sagas';

export default function* mainSagas() {
  yield all([
    fork(landingPageSagas),
    fork(loginSagas),
    fork(permissionsListSagas),
    fork(viewPermissionSagas),
    fork(addPermissionSagas),
    fork(editPermissionSagas),
  ]);
}
