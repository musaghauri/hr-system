import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_COUNTRY,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_FAIL,
  EDIT_COUNTRY,
  EDIT_COUNTRY_SUCCESS,
  EDIT_COUNTRY_FAIL,
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
      fieldName: 'name',
      placeholder: 'Enter country name',
    },
  },
  getCountryStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editCountryStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editCountryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_COUNTRY:
      return state
        .setIn(['getCountryStatus', 'loading'], true)
        .setIn(['getCountryStatus', 'loaded'], false)
        .setIn(['getCountryStatus', 'error'], false);
    case GET_COUNTRY_SUCCESS:
      return state
        .setIn(['getCountryStatus', 'loading'], false)
        .setIn(['getCountryStatus', 'loaded'], true)
        .setIn(['getCountryStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.country));
    case GET_COUNTRY_FAIL:
      return state
        .setIn(['getCountryStatus', 'loading'], false)
        .setIn(['getCountryStatus', 'loaded'], false)
        .setIn(['getCountryStatus', 'error'], action.error);
    case EDIT_COUNTRY:
      return state
        .setIn(['editCountryStatus', 'loading'], true)
        .setIn(['editCountryStatus', 'loaded'], false)
        .setIn(['editCountryStatus', 'error'], false);
    case EDIT_COUNTRY_SUCCESS:
      return state
        .setIn(['editCountryStatus', 'loading'], false)
        .setIn(['editCountryStatus', 'loaded'], true)
        .setIn(['editCountryStatus', 'error'], false);
    case EDIT_COUNTRY_FAIL:
      return state
        .setIn(['editCountryStatus', 'loading'], false)
        .setIn(['editCountryStatus', 'loaded'], false)
        .setIn(['editCountryStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editCountryReducer;
