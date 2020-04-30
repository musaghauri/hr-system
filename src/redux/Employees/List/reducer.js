import { fromJS } from 'immutable';
import { 
  RESET_REDUCER,
  GET_EMPLOYEES,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'ID',
      name: '_id',
    },
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Detail',
      name: 'detail',
    },
    {
      label: 'Department',
      name: 'department',
    },
    {
      label: 'Active',
      name: 'isActive',
    },
    {
      label: 'Status',
      name: 'status',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Block',
      name: 'block',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  employees: {
    items: [],
    total_count: 0,
  },
  getEmployeesStatus: {
    loading: false,
    loaded: false,
    error: false,
  }
});

function employeesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_EMPLOYEES:
      return state
        .setIn(['getEmployeesStatus', 'loading'], true)
        .setIn(['getEmployeesStatus', 'loaded'], false)
        .setIn(['getEmployeesStatus', 'error'], false);
    case GET_EMPLOYEES_SUCCESS:
      return state
        .setIn(['getEmployeesStatus', 'loading'], false)
        .setIn(['getEmployeesStatus', 'loaded'], true)
        .setIn(['getEmployeesStatus', 'error'], false)
        .set('employees', fromJS(action.employees));
    case GET_EMPLOYEES_FAIL:
      return state
        .setIn(['getEmployeesStatus', 'loading'], false)
        .setIn(['getEmployeesStatus', 'loaded'], false)
        .setIn(['getEmployeesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default employeesListReducer;

