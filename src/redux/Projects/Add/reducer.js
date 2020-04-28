import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
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
      value: 165464,
      text: 'employee 1',
      // detail: 'cell 1',
      // department: 'first',
      // isActive: true,
      // status: 'permanent',
    },
    {
      key: 2,
      value: 265465,
      text: 'employee 2',
      // detail: 'cell 2',
      // department: 'first',
      // isActive: false,
      // status: 'freelancer',
    },
    {
      key: 3,
      value: 356423,
      text: 'employee 3',
      // detail: 'cell 3',
      // department: 'first',
      // isActive: false,
      // status: 'permanent',
    },
  ],
  addProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addProjectReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_PROJECT:
      return state
        .setIn(['addProjectStatus', 'loading'], true)
        .setIn(['addProjectStatus', 'loaded'], false)
        .setIn(['addProjectStatus', 'error'], false);
    case ADD_PROJECT_SUCCESS:
      return state
        .setIn(['addProjectStatus', 'loading'], false)
        .setIn(['addProjectStatus', 'loaded'], true)
        .setIn(['addProjectStatus', 'error'], false);
    case ADD_PROJECT_FAIL:
      return state
        .setIn(['addProjectStatus', 'loading'], false)
        .setIn(['addProjectStatus', 'loaded'], false)
        .setIn(['addProjectStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addProjectReducer;
