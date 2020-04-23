import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_DEPARTMENT,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_FAIL,
  EDIT_DEPARTMENT,
  EDIT_DEPARTMENT_SUCCESS,
  EDIT_DEPARTMENT_FAIL,
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
  getDepartmentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editDepartmentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editDepartmentReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
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
        .setIn(['formDetails'], fromJS(action.department));
    case GET_DEPARTMENT_FAIL:
      return state
        .setIn(['getDepartmentStatus', 'loading'], false)
        .setIn(['getDepartmentStatus', 'loaded'], false)
        .setIn(['getDepartmentStatus', 'error'], action.error);
    case EDIT_DEPARTMENT:
      return state
        .setIn(['editDepartmentStatus', 'loading'], true)
        .setIn(['editDepartmentStatus', 'loaded'], false)
        .setIn(['editDepartmentStatus', 'error'], false);
    case EDIT_DEPARTMENT_SUCCESS:
      return state
        .setIn(['editDepartmentStatus', 'loading'], false)
        .setIn(['editDepartmentStatus', 'loaded'], true)
        .setIn(['editDepartmentStatus', 'error'], false);
    case EDIT_DEPARTMENT_FAIL:
      return state
        .setIn(['editDepartmentStatus', 'loading'], false)
        .setIn(['editDepartmentStatus', 'loaded'], false)
        .setIn(['editDepartmentStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editDepartmentReducer;
