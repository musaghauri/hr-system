import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_PERMISSION,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAIL,
} from './constants';

export const initialState = fromJS({
  permission: {},

  getPermissionStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewPermissionReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_PERMISSION:
      return state
        .setIn(['getPermissionStatus', 'loading'], true)
        .setIn(['getPermissionStatus', 'loaded'], false)
        .setIn(['getPermissionStatus', 'error'], false);
    case GET_PERMISSION_SUCCESS:
      return state
        .setIn(['getPermissionStatus', 'loading'], false)
        .setIn(['getPermissionStatus', 'loaded'], true)
        .setIn(['getPermissionStatus', 'error'], false)
        .set('permission', fromJS(action.permission));
    case GET_PERMISSION_FAIL:
      return state
        .setIn(['getPermissionStatus', 'loading'], false)
        .setIn(['getPermissionStatus', 'loaded'], false)
        .setIn(['getPermissionStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewPermissionReducer;
