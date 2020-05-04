import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_EMPLOYEE,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
} from './constants';

export const initialState = fromJS({
  employee: {},

  getEmployeeStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewEmployeeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_EMPLOYEE:
      return state
        .setIn(['getEmployeeStatus', 'loading'], true)
        .setIn(['getEmployeeStatus', 'loaded'], false)
        .setIn(['getEmployeeStatus', 'error'], false);
    case GET_EMPLOYEE_SUCCESS:
      return state
        .setIn(['getEmployeeStatus', 'loading'], false)
        .setIn(['getEmployeeStatus', 'loaded'], true)
        .setIn(['getEmployeeStatus', 'error'], false)
        .set('employee', fromJS(action.employee));
    case GET_EMPLOYEE_FAIL:
      return state
        .setIn(['getEmployeeStatus', 'loading'], false)
        .setIn(['getEmployeeStatus', 'loaded'], false)
        .setIn(['getEmployeeStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewEmployeeReducer;
