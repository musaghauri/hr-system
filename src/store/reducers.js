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
});
