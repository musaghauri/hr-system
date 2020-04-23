import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_PRIORITY,
  GET_PRIORITY_SUCCESS,
  GET_PRIORITY_FAIL,
} from './constants';

export const initialState = fromJS({
    priority: {},

  getPriorityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewPriorityReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_PRIORITY:
      return state
        .setIn(['getPriorityStatus', 'loading'], true)
        .setIn(['getPriorityStatus', 'loaded'], false)
        .setIn(['getPriorityStatus', 'error'], false);
    case GET_PRIORITY_SUCCESS:
      return state
        .setIn(['getPriorityStatus', 'loading'], false)
        .setIn(['getPriorityStatus', 'loaded'], true)
        .setIn(['getPriorityStatus', 'error'], false)
        .set('priority', fromJS(action.priority));
    case GET_PRIORITY_FAIL:
      return state
        .setIn(['getPriorityStatus', 'loading'], false)
        .setIn(['getPriorityStatus', 'loaded'], false)
        .setIn(['getPriorityStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewPriorityReducer;
