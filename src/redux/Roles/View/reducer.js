import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAIL,
} from './constants';

export const initialState = fromJS({
  role: {},

  getRoleStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewRoleReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_ROLE:
      return state
        .setIn(['getRoleStatus', 'loading'], true)
        .setIn(['getRoleStatus', 'loaded'], false)
        .setIn(['getRoleStatus', 'error'], false);
    case GET_ROLE_SUCCESS:
      return state
        .setIn(['getRoleStatus', 'loading'], false)
        .setIn(['getRoleStatus', 'loaded'], true)
        .setIn(['getRoleStatus', 'error'], false)
        .set('role', fromJS(action.role));
    case GET_ROLE_FAIL:
      return state
        .setIn(['getRoleStatus', 'loading'], false)
        .setIn(['getRoleStatus', 'loaded'], false)
        .setIn(['getRoleStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewRoleReducer;
