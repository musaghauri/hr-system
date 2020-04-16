import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  GET_STATE,
  GET_STATE_SUCCESS,
  GET_STATE_FAIL,
  EDIT_STATE,
  EDIT_STATE_SUCCESS,
  EDIT_STATE_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
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
      placeholder: 'Enter state name',
    },
    country: {
      name: 'country',
      label: 'Country',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'country',
      placeholder: 'Select Country',
      type: 'country',
    },
  },
  countries: [],
  getStateStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getCountriesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  editStateStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function editStateReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case GET_STATE:
      return state
        .setIn(['getStateStatus', 'loading'], true)
        .setIn(['getStateStatus', 'loaded'], false)
        .setIn(['getStateStatus', 'error'], false);
    case GET_STATE_SUCCESS:
      return state
        .setIn(['getStateStatus', 'loading'], false)
        .setIn(['getStateStatus', 'loaded'], true)
        .setIn(['getStateStatus', 'error'], false)
        .setIn(['formDetails'], fromJS(action.state));
    case GET_STATE_FAIL:
      return state
        .setIn(['getStateStatus', 'loading'], false)
        .setIn(['getStateStatus', 'loaded'], false)
        .setIn(['getStateStatus', 'error'], action.error);
    case EDIT_STATE:
      return state
        .setIn(['editStateStatus', 'loading'], true)
        .setIn(['editStateStatus', 'loaded'], false)
        .setIn(['editStateStatus', 'error'], false);
    case EDIT_STATE_SUCCESS:
      return state
        .setIn(['editStateStatus', 'loading'], false)
        .setIn(['editStateStatus', 'loaded'], true)
        .setIn(['editStateStatus', 'error'], false);
    case EDIT_STATE_FAIL:
      return state
        .setIn(['editStateStatus', 'loading'], false)
        .setIn(['editStateStatus', 'loaded'], false)
        .setIn(['editStateStatus', 'error'], action.error);
    case GET_COUNTRIES:
      return state
        .setIn(['getCountriesStatus', 'loading'], true)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], false);
    case GET_COUNTRIES_SUCCESS:
      return state
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], true)
        .setIn(['getCountriesStatus', 'error'], false)
        .set('countries', fromJS(action.countries));
    case GET_COUNTRIES_FAIL:
      return state
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default editStateReducer;
