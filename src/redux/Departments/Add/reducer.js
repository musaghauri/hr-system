import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_DEPARTMENT,
  ADD_DEPARTMENT_SUCCESS,
  ADD_DEPARTMENT_FAIL,
} from './constants';

export const initialState = fromJS({
  formDetails: {
    name: {
      name: 'name',
      label: 'Name',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'Name',
      placeholder: 'Enter department name',
    }
  },
  addDepartmentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addDepartmentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_DEPARTMENT:
      return state
        .setIn(['addDepartmentStatus', 'loading'], true)
        .setIn(['addDepartmentStatus', 'loaded'], false)
        .setIn(['addDepartmentStatus', 'error'], false);
    case ADD_DEPARTMENT_SUCCESS:
      return state
        .setIn(['addDepartmentStatus', 'loading'], false)
        .setIn(['addDepartmentStatus', 'loaded'], true)
        .setIn(['addDepartmentStatus', 'error'], false);
    case ADD_DEPARTMENT_FAIL:
      return state
        .setIn(['addDepartmentStatus', 'loading'], false)
        .setIn(['addDepartmentStatus', 'loaded'], false)
        .setIn(['addDepartmentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addDepartmentReducer;
