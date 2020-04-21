import { fork, all } from 'redux-saga/effects';
import landingPageSagas from '@redux/LandingPage/sagas';
import loginSagas from '@redux/Auth/Login/sagas';
import permissionsListSagas from '@redux/Permissions/List/sagas';
import viewPermissionSagas from '@redux/Permissions/View/sagas';
import addPermissionSagas from '@redux/Permissions/Add/sagas';
import editPermissionSagas from '@redux/Permissions/Edit/sagas';

import rolesListSagas from '@redux/Roles/List/sagas';
import viewRoleSagas from '@redux/Roles/View/sagas';
import addRoleSagas from '@redux/Roles/Add/sagas';
import editRoleSagas from '@redux/Roles/Edit/sagas';

import countriesListSagas from '@redux/Countries/List/sagas';
import viewCountrySagas from '@redux/Countries/View/sagas';
import addCountrySagas from '@redux/Countries/Add/sagas';
import editCountrySagas from '@redux/Countries/Edit/sagas';

import statesListSagas from '@redux/States/List/sagas';
import viewStateSagas from '@redux/States/View/sagas';
import addStateSagas from '@redux/States/Add/sagas';
import editStateSagas from '@redux/States/Edit/sagas';

import citiesListSagas from '@redux/Cities/List/sagas';
import viewCitySagas from '@redux/Cities/View/sagas';
import addCitySagas from '@redux/Cities/Add/sagas';
import editCitySagas from '@redux/Cities/Edit/sagas';

import announcementsListSagas from '@redux/Announcements/List/sagas';
import viewAnnouncementSagas from '@redux/Announcements/View/sagas';
import addAnnouncementSagas from '@redux/Announcements/Add/sagas';
import editAnnouncementSagas from '@redux/Announcements/Edit/sagas';

export default function* mainSagas() {
  yield all([
    fork(landingPageSagas),
    fork(loginSagas),
    fork(permissionsListSagas),
    fork(viewPermissionSagas),
    fork(addPermissionSagas),
    fork(editPermissionSagas),
    fork(rolesListSagas),
    fork(viewRoleSagas),
    fork(addRoleSagas),
    fork(editRoleSagas),
    fork(countriesListSagas),
    fork(viewCountrySagas),
    fork(addCountrySagas),
    fork(editCountrySagas),
    fork(statesListSagas),
    fork(viewStateSagas),
    fork(addStateSagas),
    fork(editStateSagas),
    fork(citiesListSagas),
    fork(viewCitySagas),
    fork(addCitySagas),
    fork(editCitySagas),
    fork(announcementsListSagas),
    fork(viewAnnouncementSagas), 
    fork(addAnnouncementSagas),
    fork(editAnnouncementSagas),
  ]);
}
