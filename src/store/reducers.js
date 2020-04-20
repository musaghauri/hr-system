import { combineReducers } from 'redux-immutable';

import landingPageReducer from '@redux/LandingPage/reducer';

import loginReducer from '@redux/Auth/Login/reducer';
import forgotPasswordReducer from '@redux/Auth/ForgotPassword/reducer';
import resetPasswordReducer from '@redux/Auth/ResetPassword/reducer';

import employeesListReducer from '@redux/Employees/List/reducer';
import addEmployeeReducer from '@redux/Employees/Add/reducer';
import editEmployeeReducer from '@redux/Employees/Edit/reducer';
import viewEmployeeReducer from '@redux/Employees/View/reducer';

import permissionsListReducer from '@redux/Permissions/List/reducer';
import addPermissionReducer from '@redux/Permissions/Add/reducer';
import editPermissionReducer from '@redux/Permissions/Edit/reducer';
import viewPermissionReducer from '@redux/Permissions/View/reducer';

import rolesListReducer from '@redux/Roles/List/reducer';
import addRoleReducer from '@redux/Roles/Add/reducer';
import editRoleReducer from '@redux/Roles/Edit/reducer';
import viewRoleReducer from '@redux/Roles/View/reducer';

import countriesListReducer from '@redux/Countries/List/reducer';
import addCountryReducer from '@redux/Countries/Add/reducer';
import editCountryReducer from '@redux/Countries/Edit/reducer';
import viewCountryReducer from '@redux/Countries/View/reducer';

import statesListReducer from '@redux/States/List/reducer';
import addStateReducer from '@redux/States/Add/reducer';
import editStateReducer from '@redux/States/Edit/reducer';
import viewStateReducer from '@redux/States/View/reducer';

import assetsListReducer from '@redux/Assets/List/reducer';
import addAssetReducer from '@redux/Assets/Add/reducer';
import editAssetReducer from '@redux/Assets/Edit/reducer';
import viewAssetReducer from '@redux/Assets/View/reducer';

import citiesListReducer from '@redux/Cities/List/reducer';
import addCityReducer from '@redux/Cities/Add/reducer';
import editCityReducer from '@redux/Cities/Edit/reducer';
import viewCityReducer from '@redux/Cities/View/reducer';

export default combineReducers({
  landingPage: landingPageReducer,
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  employeesList: employeesListReducer,
  addEmployee: addEmployeeReducer,
  editEmployee: editEmployeeReducer,
  viewEmployee: viewEmployeeReducer,
  permissionsList: permissionsListReducer,
  addPermission: addPermissionReducer,
  editPermission: editPermissionReducer,
  viewPermission: viewPermissionReducer,
  rolesList: rolesListReducer,
  addRole: addRoleReducer,
  editRole: editRoleReducer,
  viewRole: viewRoleReducer,
  countriesList: countriesListReducer,
  addCountry: addCountryReducer,
  editCountry: editCountryReducer,
  viewCountry: viewCountryReducer,
  statesList: statesListReducer,
  addState: addStateReducer,
  editState: editStateReducer,
  viewState: viewStateReducer,
  assetsList: assetsListReducer, 
  addAsset: addAssetReducer,
  editAsset: editAssetReducer,
  viewAsset: viewAssetReducer,
  citiesList: citiesListReducer,
  addCity: addCityReducer,
  editCity: editCityReducer,
  viewCity: viewCityReducer,
});
