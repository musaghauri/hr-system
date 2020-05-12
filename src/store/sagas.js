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

import assetsListSagas from '@redux/Assets/List/sagas';
import viewAssetSagas from '@redux/Assets/View/sagas';
import addAssetSagas from '@redux/Assets/Add/sagas';
import editAssetSagas from '@redux/Assets/Edit/sagas';

import citiesListSagas from '@redux/Cities/List/sagas';
import viewCitySagas from '@redux/Cities/View/sagas';
import addCitySagas from '@redux/Cities/Add/sagas';
import editCitySagas from '@redux/Cities/Edit/sagas';

import prioritiesListSagas from '@redux/Priorities/List/sagas';
import viewPrioritySagas from '@redux/Priorities/View/sagas';
import addPrioritySagas from '@redux/Priorities/Add/sagas';
import editPrioritySagas from '@redux/Priorities/Edit/sagas';

import announcementsListSagas from '@redux/Announcements/List/sagas';
import viewAnnouncementSagas from '@redux/Announcements/View/sagas';
import addAnnouncementSagas from '@redux/Announcements/Add/sagas';
import editAnnouncementSagas from '@redux/Announcements/Edit/sagas';

import wishlistSagas from '@redux/Wishlist/List/sagas';
import viewWishlistSagas from '@redux/Wishlist/View/sagas';
import addWishlistSagas from '@redux/Wishlist/Add/sagas';
import editWishlistSagas from '@redux/Wishlist/Edit/sagas';

import departmentsListSagas from '@redux/Departments/List/sagas';
import viewDepartmentSagas from '@redux/Departments/View/sagas';
import addDepartmentSagas from '@redux/Departments/Add/sagas';
import editDepartmentSagas from '@redux/Departments/Edit/sagas';

import projectsListSagas from '@redux/Projects/List/sagas';
import viewProjectSagas from '@redux/Projects/View/sagas';
import addProjectSagas from '@redux/Projects/Add/sagas';
import editProjectSagas from '@redux/Projects/Edit/sagas';

import employeesListSagas from '@redux/Employees/List/sagas';
import viewEmployeeSagas from '@redux/Employees/View/sagas';
import addEmployeeSagas from '@redux/Employees/Add/sagas';
import editEmployeeSagas from '@redux/Employees/Edit/sagas';

import branchesListSagas from '@redux/Branches/List/sagas';
import viewBranchSagas from '@redux/Branches/View/sagas';
import addBranchSagas from '@redux/Branches/Add/sagas';
import editBranchSagas from '@redux/Branches/Edit/sagas';

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
    fork(assetsListSagas),
    fork(viewAssetSagas),
    fork(addAssetSagas),
    fork(editAssetSagas),
    fork(citiesListSagas),
    fork(viewCitySagas),
    fork(addCitySagas),
    fork(editCitySagas),
    fork(prioritiesListSagas),
    fork(viewPrioritySagas),
    fork(addPrioritySagas),
    fork(editPrioritySagas),
    fork(announcementsListSagas),
    fork(viewAnnouncementSagas),
    fork(addAnnouncementSagas),
    fork(editAnnouncementSagas),
    fork(wishlistSagas),
    fork(viewWishlistSagas),
    fork(addWishlistSagas),
    fork(editWishlistSagas),
    fork(departmentsListSagas),
    fork(viewDepartmentSagas),
    fork(addDepartmentSagas),
    fork(editDepartmentSagas),
    fork(projectsListSagas),
    fork(viewProjectSagas),
    fork(addProjectSagas),
    fork(editProjectSagas),
    fork(employeesListSagas),
    fork(viewEmployeeSagas),
    fork(addEmployeeSagas),
    fork(editEmployeeSagas),
    fork(branchesListSagas),
    fork(viewBranchSagas),
    fork(addBranchSagas),
    fork(editBranchSagas),
  ]);
}
