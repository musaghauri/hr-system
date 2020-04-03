import { combineReducers } from "redux-immutable";

import landingPageReducer from "@redux/LandingPage/reducer";
import loginReducer from "@redux/Auth/Login/reducer";
import forgotPasswordReducer from "@redux/Auth/ForgotPassword/reducer";
import resetPasswordReducer from "@redux/Auth/ResetPassword/reducer";

export default combineReducers({
  landingPage: landingPageReducer,
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer
});
