import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_COUNTRY,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
} from './constants';

export const initialState = fromJS({
  country: {},

  getCountryStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewCountryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_COUNTRY:
      return state
        .setIn(['getCountryStatus', 'loading'], true)
        .setIn(['getCountryStatus', 'loaded'], false)
        .setIn(['getCountryStatus', 'error'], false);
    case GET_COUNTRY_SUCCESS:
      return state
        .setIn(['getCountryStatus', 'loading'], false)
        .setIn(['getCountryStatus', 'loaded'], true)
        .setIn(['getCountryStatus', 'error'], false)
        .set('country', fromJS(action.country));
    case GET_COUNTRY_FAIL:
      return state
        .setIn(['getCountryStatus', 'loading'], false)
        .setIn(['getCountryStatus', 'loaded'], false)
        .setIn(['getCountryStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewCountryReducer;
