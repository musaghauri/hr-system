import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
} from './constants';

export const initialState = fromJS({
  state: {},

  getStateStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewStateReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_STATE:
      return state
        .setIn(['getStateStatus', 'loading'], true)
        .setIn(['getStateStatus', 'loaded'], false)
        .setIn(['getStateStatus', 'error'], false);
    case GET_STATE_SUCCESS:
      return state
        .setIn(['getStateStatus', 'loading'], false)
        .setIn(['getStateStatus', 'loaded'], true)
        .setIn(['getStateStatus', 'error'], false)
        .set('state', fromJS(action.state));
    case GET_STATE_FAIL:
      return state
        .setIn(['getStateStatus', 'loading'], false)
        .setIn(['getStateStatus', 'loaded'], false)
        .setIn(['getStateStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewStateReducer;
