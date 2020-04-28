import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_BRANCH,
  DELETE_BRANCH_SUCCESS,
  DELETE_BRANCH_FAIL,
  GET_BRANCHES,
  GET_BRANCHES_SUCCESS,
  GET_BRANCHES_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'City',
      name: 'city',
    },
    {
      label: 'Address',
      name: 'address',
    },
    {
      label: 'Contact No',
      name: 'contact,landline',
    },
    {
      label: 'Departments',
      name: 'departments',
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
  branches: {
    items: [],
    total_count: 0,
  },
  getBranchesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteBranchStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function branchesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_BRANCH:
      return state
        .setIn(['deleteBranchStatus', 'loading'], true)
        .setIn(['deleteBranchStatus', 'loaded'], false)
        .setIn(['deleteBranchStatus', 'error'], false);
    case DELETE_BRANCH_SUCCESS:
      return state
        .setIn(['deleteBranchStatus', 'loading'], false)
        .setIn(['deleteBranchStatus', 'loaded'], true)
        .setIn(['deleteBranchStatus', 'error'], false)
        .deleteIn(['branches', 'items', action.index]);
    case DELETE_BRANCH_FAIL:
      return state
        .setIn(['deleteBranchStatus', 'loading'], false)
        .setIn(['deleteBranchStatus', 'loaded'], false)
        .setIn(['deleteBranchStatus', 'error'], action.error);
    case GET_BRANCHES:
      return state
        .setIn(['getBranchesStatus', 'loading'], true)
        .setIn(['getBranchesStatus', 'loaded'], false)
        .setIn(['getBranchesStatus', 'error'], false);
    case GET_BRANCHES_SUCCESS:
      return state
        .setIn(['getBranchesStatus', 'loading'], false)
        .setIn(['getBranchesStatus', 'loaded'], true)
        .setIn(['getBranchesStatus', 'error'], false)
        .set('branches', fromJS(action.branches));
    case GET_BRANCHES_FAIL:
      return state
        .setIn(['getBranchesStatus', 'loading'], false)
        .setIn(['getBranchesStatus', 'loaded'], false)
        .setIn(['getBranchesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default branchesListReducer;