import { combineReducers } from "redux-immutable";

import landingPageReducer from "@redux/LandingPage/reducer";
import loginReducer from "@redux/Auth/Login/reducer";
import forgotPasswordReducer from "@redux/Auth/ForgotPassword/reducer";
import resetPasswordReducer from "@redux/Auth/ResetPassword/reducer";
import employeesListReducer from "@redux/Employees/List/reducer";
import employeesAddReducer from "@redux/Employees/Add/reducer";
import employeesEditReducer from "@redux/Employees/Edit/reducer";
import employeesViewReducer from "@redux/Employees/View/reducer";

export default combineReducers({
  landingPage: landingPageReducer,
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  employeesList: employeesListReducer,
  employeeAdd: employeesAddReducer,
  employeeEdit: employeesEditReducer,
  employeeView: employeesViewReducer,
});
