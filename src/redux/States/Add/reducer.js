import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_STATE,
  ADD_STATE_SUCCESS,
  ADD_STATE_FAIL,
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
  addStateStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getCountriesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addStateReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_STATE:
      return state
        .setIn(['addStateStatus', 'loading'], true)
        .setIn(['addStateStatus', 'loaded'], false)
        .setIn(['addStateStatus', 'error'], false);
    case ADD_STATE_SUCCESS:
      return state
        .setIn(['addStateStatus', 'loading'], false)
        .setIn(['addStateStatus', 'loaded'], true)
        .setIn(['addStateStatus', 'error'], false);
    case ADD_STATE_FAIL:
      return state
        .setIn(['addStateStatus', 'loading'], false)
        .setIn(['addStateStatus', 'loaded'], false)
        .setIn(['addStateStatus', 'error'], action.error);
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

export default addStateReducer;
