import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_PRIORITY,
  DELETE_PRIORITY_SUCCESS,
  DELETE_PRIORITY_FAIL,
  GET_PRIORITIES,
  GET_PRIORITIES_SUCCESS,
  GET_PRIORITIES_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Colour',
      name: 'colour',
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
  priorities: {
    items: [],
    total_count: 0,
  },
  getPrioritiesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deletePriorityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function prioritiesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_PRIORITY:
      return state
        .setIn(['deletePriorityStatus', 'loading'], true)
        .setIn(['deletePriorityStatus', 'loaded'], false)
        .setIn(['deletePriorityStatus', 'error'], false);
    case DELETE_PRIORITY_SUCCESS:
      return state
        .setIn(['deletePriorityStatus', 'loading'], false)
        .setIn(['deletePriorityStatus', 'loaded'], true)
        .setIn(['deletePriorityStatus', 'error'], false)
        .deleteIn(['priorities', 'items', action.index]);
    case DELETE_PRIORITY_FAIL:
      return state
        .setIn(['deletePriorityStatus', 'loading'], false)
        .setIn(['deletePriorityStatus', 'loaded'], false)
        .setIn(['deletePriorityStatus', 'error'], action.error);
    case GET_PRIORITIES:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], true)
        .setIn(['getPrioritiesStatus', 'loaded'], false)
        .setIn(['getPrioritiesStatus', 'error'], false);
    case GET_PRIORITIES_SUCCESS:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], false)
        .setIn(['getPrioritiesStatus', 'loaded'], true)
        .setIn(['getPrioritiesStatus', 'error'], false)
        .set('priorities', fromJS(action.priorities));
    case GET_PRIORITIES_FAIL:
      return state
        .setIn(['getPrioritiesStatus', 'loading'], false)
        .setIn(['getPrioritiesStatus', 'loaded'], false)
        .setIn(['getPrioritiesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default prioritiesListReducer;
