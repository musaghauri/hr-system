import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_BRANCH,
  GET_BRANCH_SUCCESS,
  GET_BRANCH_FAIL,
} from './constants';

export const initialState = fromJS({
  branch: {},

  getBranchStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewBranchReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_BRANCH:
      return state
        .setIn(['getBranchStatus', 'loading'], true)
        .setIn(['getBranchStatus', 'loaded'], false)
        .setIn(['getBranchStatus', 'error'], false);
    case GET_BRANCH_SUCCESS:
      return state
        .setIn(['getBranchStatus', 'loading'], false)
        .setIn(['getBranchStatus', 'loaded'], true)
        .setIn(['getBranchStatus', 'error'], false)
        .set('branch', fromJS(action.branch));
    case GET_BRANCH_FAIL:
      return state
        .setIn(['getBranchStatus', 'loading'], false)
        .setIn(['getBranchStatus', 'loaded'], false)
        .setIn(['getBranchStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewBranchReducer;
