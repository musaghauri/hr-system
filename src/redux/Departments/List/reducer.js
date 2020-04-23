import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_DEPARTMENT,
  DELETE_DEPARTMENT_SUCCESS,
  DELETE_DEPARTMENT_FAIL,
  GET_DEPARTMENTS,
  GET_DEPARTMENTS_SUCCESS,
  GET_DEPARTMENTS_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Delete',
      name: 'delete',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  departments: {
    items: [],
    total_count: 0,
  },
  getDepartmentsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteDepartmentStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function departmentsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_DEPARTMENT:
      return state
        .setIn(['deleteDepartmentStatus', 'loading'], true)
        .setIn(['deleteDepartmentStatus', 'loaded'], false)
        .setIn(['deleteDepartmentStatus', 'error'], false);
    case DELETE_DEPARTMENT_SUCCESS:
      return state
        .setIn(['deleteDepartmentStatus', 'loading'], false)
        .setIn(['deleteDepartmentStatus', 'loaded'], true)
        .setIn(['deleteDepartmentStatus', 'error'], false)
        .deleteIn(['departments', 'items', action.index]);
    case DELETE_DEPARTMENT_FAIL:
      return state
        .setIn(['deleteDepartmentStatus', 'loading'], false)
        .setIn(['deleteDepartmentStatus', 'loaded'], false)
        .setIn(['deleteDepartmentStatus', 'error'], action.error);
    case GET_DEPARTMENTS:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], true)
        .setIn(['getDepartmentsStatus', 'loaded'], false)
        .setIn(['getDepartmentsStatus', 'error'], false);
    case GET_DEPARTMENTS_SUCCESS:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], false)
        .setIn(['getDepartmentsStatus', 'loaded'], true)
        .setIn(['getDepartmentsStatus', 'error'], false)
        .set('departments', fromJS(action.departments));
    case GET_DEPARTMENTS_FAIL:
      return state
        .setIn(['getDepartmentsStatus', 'loading'], false)
        .setIn(['getDepartmentsStatus', 'loaded'], false)
        .setIn(['getDepartmentsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default departmentsListReducer;
