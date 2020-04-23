import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_DEPARTMENT,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAIL,
} from './constants';

export const initialState = fromJS({
  department: {},

  getDepartmentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewDepartmentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_DEPARTMENT:
      return state
        .setIn(['getDepartmentStatus', 'loading'], true)
        .setIn(['getDepartmentStatus', 'loaded'], false)
        .setIn(['getDepartmentStatus', 'error'], false);
    case GET_DEPARTMENT_SUCCESS:
      return state
        .setIn(['getDepartmentStatus', 'loading'], false)
        .setIn(['getDepartmentStatus', 'loaded'], true)
        .setIn(['getDepartmentStatus', 'error'], false)
        .set('department', fromJS(action.department));
    case GET_DEPARTMENT_FAIL:
      return state
        .setIn(['getDepartmentStatus', 'loading'], false)
        .setIn(['getDepartmentStatus', 'loaded'], false)
        .setIn(['getDepartmentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewDepartmentReducer;
