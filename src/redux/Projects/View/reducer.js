import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_PROJECT,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
} from './constants';

export const initialState = fromJS({
  project: {},

  getProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewProjectReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
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
        .set('project', fromJS(action.project));
    case GET_PROJECT_FAIL:
      return state
        .setIn(['getProjectStatus', 'loading'], false)
        .setIn(['getProjectStatus', 'loaded'], false)
        .setIn(['getProjectStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewProjectReducer;
