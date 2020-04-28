import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  EDIT_PROJECT,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAIL,
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
      placeholder: 'Enter project name',
    },
    employees: {
      name: 'employees',
      label: 'Employees',
      status: true,
      errorText: '',
      value: [],
      rules: ['isRequired'],
      fieldName: 'Employees',
      placeholder: 'Select employee name',
    }
  },
  employees: [
    {
      key: 1,
      id: 165464,
      name: 'employee 1',
      detail: 'cell 1',
      department: 'first',
      isActive: true,
      status: 'permanent',
    },
    {
      key: 2,
      id: 265465,
      name: 'employee 2',
      detail: 'cell 2',
      department: 'first',
      isActive: false,
      status: 'freelancer',
    },
    {
      key: 3,
      id: 356423,
      name: 'employee 3',
      detail: 'cell 3',
      department: 'first',
      isActive: false,
      status: 'permanent',
    },
  ],
  getProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editProjectReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_PROJECT:
      return state
        .setIn(['getProjectStatus', 'loading'], true)
        .setIn(['getProjectStatus', 'loaded'], false)
        .setIn(['getProjectStatus', 'error'], false);
    case GET_PROJECT_SUCCESS:
      return state
        .setIn(['getProjectStatus', 'loading'], false)
        .setIn(['getProjectStatus', 'loaded'], true)
        .setIn(['getProjectStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.project));
    case GET_PROJECT_FAIL:
      return state
        .setIn(['getProjectStatus', 'loading'], false)
        .setIn(['getProjectStatus', 'loaded'], false)
        .setIn(['getProjectStatus', 'error'], action.error);
    case EDIT_PROJECT:
      return state
        .setIn(['editProjectStatus', 'loading'], true)
        .setIn(['editProjectStatus', 'loaded'], false)
        .setIn(['editProjectStatus', 'error'], false);
    case EDIT_PROJECT_SUCCESS:
      return state
        .setIn(['editProjectStatus', 'loading'], false)
        .setIn(['editProjectStatus', 'loaded'], true)
        .setIn(['editProjectStatus', 'error'], false);
    case EDIT_PROJECT_FAIL:
      return state
        .setIn(['editProjectStatus', 'loading'], false)
        .setIn(['editProjectStatus', 'loaded'], false)
        .setIn(['editProjectStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editProjectReducer;
