import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_CITY,
  DELETE_CITY_SUCCESS,
  DELETE_CITY_FAIL,
  GET_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,
} from './constants';

export const initialCity = fromJS({
  headings: [
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'State',
      name: 'state',
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
  cities: {
    items: [],
    total_count: 0,
  },
  getCitiesStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteCityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function citiesListReducer(city = initialCity, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialCity;
    case UPDATE_VALUE:
      return city.setIn(action.name, fromJS(action.value));
    case DELETE_CITY:
      return city
        .setIn(['deleteCityStatus', 'loading'], true)
        .setIn(['deleteCityStatus', 'loaded'], false)
        .setIn(['deleteCityStatus', 'error'], false);
    case DELETE_CITY_SUCCESS:
      return city
        .setIn(['deleteCityStatus', 'loading'], false)
        .setIn(['deleteCityStatus', 'loaded'], true)
        .setIn(['deleteCityStatus', 'error'], false)
        .deleteIn(['cities', 'items', action.index]);
    case DELETE_CITY_FAIL:
      return city
        .setIn(['deleteCityStatus', 'loading'], false)
        .setIn(['deleteCityStatus', 'loaded'], false)
        .setIn(['deleteCityStatus', 'error'], action.error);
    case GET_CITIES:
      return city
        .setIn(['getCitiesStatus', 'loading'], true)
        .setIn(['getCitiesStatus', 'loaded'], false)
        .setIn(['getCitiesStatus', 'error'], false);
    case GET_CITIES_SUCCESS:
      return city
        .setIn(['getCitiesStatus', 'loading'], false)
        .setIn(['getCitiesStatus', 'loaded'], true)
        .setIn(['getCitiesStatus', 'error'], false)
        .set('cities', fromJS(action.cities));
    case GET_CITIES_FAIL:
      return city
        .setIn(['getCitiesStatus', 'loading'], false)
        .setIn(['getCitiesStatus', 'loaded'], false)
        .setIn(['getCitiesStatus', 'error'], action.error);
    default:
      return city;
  }
}

export default citiesListReducer;
