import { combineReducers } from 'redux-immutable';

import landingPageReducer from '@redux/LandingPage/reducer';

export default combineReducers({
  landingPage: landingPageReducer,
});
