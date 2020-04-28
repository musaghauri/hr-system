import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_STATE,
  DELETE_STATE_SUCCESS,
  DELETE_STATE_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Country',
      name: 'country',
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
  states: {
    items: [],
    total_count: 0,
  },
  getStatesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteStateStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function statesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_STATE:
      return state
        .setIn(['deleteStateStatus', 'loading'], true)
        .setIn(['deleteStateStatus', 'loaded'], false)
        .setIn(['deleteStateStatus', 'error'], false);
    case DELETE_STATE_SUCCESS:
      return state
        .setIn(['deleteStateStatus', 'loading'], false)
        .setIn(['deleteStateStatus', 'loaded'], true)
        .setIn(['deleteStateStatus', 'error'], false)
        .deleteIn(['states', 'items', action.index]);
    case DELETE_STATE_FAIL:
      return state
        .setIn(['deleteStateStatus', 'loading'], false)
        .setIn(['deleteStateStatus', 'loaded'], false)
        .setIn(['deleteStateStatus', 'error'], action.error);
    case GET_STATES:
      return state
        .setIn(['getStatesStatus', 'loading'], true)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], false);
    case GET_STATES_SUCCESS:
      return state
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], true)
        .setIn(['getStatesStatus', 'error'], false)
        .set('states', fromJS(action.states));
    case GET_STATES_FAIL:
      return state
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default statesListReducer;
