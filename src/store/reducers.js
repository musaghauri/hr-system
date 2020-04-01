import { combineReducers } from "redux-immutable";

import landingPageReducer from "@redux/LandingPage/reducer";
import registerReducer from "@redux/Register/reducer";

export default combineReducers({
  landingPage: landingPageReducer,
  register: registerReducer
});
