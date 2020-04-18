import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_CITY,
  ADD_CITY_SUCCESS,
  ADD_CITY_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_STATES,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL,
} from './constants';

export const initialCity = fromJS({
  formDetails: {
    name: {
      name: 'name',
      label: 'Name',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'name',
      placeholder: 'Enter city name',
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
    },
    state: {
      name: 'state',
      label: 'State',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'state',
      placeholder: 'Select State',
    },
  },
  countries: [],
  states: [],
  addCityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getCountriesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  getStatesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addCityReducer(city = initialCity, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialCity;
    case UPDATE_VALUE:
      return city.setIn(action.name, fromJS(action.value));
    case ADD_CITY:
      return city
        .setIn(['addCityStatus', 'loading'], true)
        .setIn(['addCityStatus', 'loaded'], false)
        .setIn(['addCityStatus', 'error'], false);
    case ADD_CITY_SUCCESS:
      return city
        .setIn(['addCityStatus', 'loading'], false)
        .setIn(['addCityStatus', 'loaded'], true)
        .setIn(['addCityStatus', 'error'], false);
    case ADD_CITY_FAIL:
      return city
        .setIn(['addCityStatus', 'loading'], false)
        .setIn(['addCityStatus', 'loaded'], false)
        .setIn(['addCityStatus', 'error'], action.error);
    case GET_COUNTRIES:
      return city
        .setIn(['getCountriesStatus', 'loading'], true)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], false);
    case GET_COUNTRIES_SUCCESS:
      return city
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], true)
        .setIn(['getCountriesStatus', 'error'], false)
        .set('countries', fromJS(action.countries));
    case GET_COUNTRIES_FAIL:
      return city
        .setIn(['getCountriesStatus', 'loading'], false)
        .setIn(['getCountriesStatus', 'loaded'], false)
        .setIn(['getCountriesStatus', 'error'], action.error);
    case GET_STATES:
      return city
        .setIn(['getStatesStatus', 'loading'], true)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], false);
    case GET_STATES_SUCCESS:
      return city
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], true)
        .setIn(['getStatesStatus', 'error'], false)
        .set('states', fromJS(action.states));
    case GET_STATES_FAIL:
      return city
        .setIn(['getStatesStatus', 'loading'], false)
        .setIn(['getStatesStatus', 'loaded'], false)
        .setIn(['getStatesStatus', 'error'], action.error);
    default:
      return city;
  }
}

export default addCityReducer;
