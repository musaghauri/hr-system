import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  DELETE_COUNTRY_FAIL,
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
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
  countries: {
    items: [],
    total_count: 0,
  },
  getCountriesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteCountryStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function countriesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_COUNTRY:
      return state
        .setIn(['deleteCountryStatus', 'loading'], true)
        .setIn(['deleteCountryStatus', 'loaded'], false)
        .setIn(['deleteCountryStatus', 'error'], false);
    case DELETE_COUNTRY_SUCCESS:
      return state
        .setIn(['deleteCountryStatus', 'loading'], false)
        .setIn(['deleteCountryStatus', 'loaded'], true)
        .setIn(['deleteCountryStatus', 'error'], false)
        .deleteIn(['countries', 'items', action.index]);
    case DELETE_COUNTRY_FAIL:
      return state
        .setIn(['deleteCountryStatus', 'loading'], false)
        .setIn(['deleteCountryStatus', 'loaded'], false)
        .setIn(['deleteCountryStatus', 'error'], action.error);
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

export default countriesListReducer;
