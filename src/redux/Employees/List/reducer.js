import { fromJS } from 'immutable';
import { RESET_REDUCER } from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'ID',
      name: 'id',
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
  employees: [
    {
      id: 1,
      name: 'employee 1',
      detail: 'cell 1',
      department: 'first',
      isActive: true,
      status: 'permanent',
    },
    {
      id: 2,
      name: 'employee 2',
      detail: 'cell 2',
      department: 'first',
      isActive: false,
      status: 'freelancer',
    },
    {
      id: 3,
      name: 'employee 3',
      detail: 'cell 3',
      department: 'first',
      isActive: false,
      status: 'permanent',
    },
  ],
});

function employeesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
}

export default employeesListReducer;
