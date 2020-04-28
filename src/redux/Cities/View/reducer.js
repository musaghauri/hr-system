import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
} from './constants';

export const initialCity = fromJS({
  city: {},

  getCityStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewCityReducer(city = initialCity, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialCity;
    case GET_CITY:
      return city
        .setIn(['getCityStatus', 'loading'], true)
        .setIn(['getCityStatus', 'loaded'], false)
        .setIn(['getCityStatus', 'error'], false);
    case GET_CITY_SUCCESS:
      return city
        .setIn(['getCityStatus', 'loading'], false)
        .setIn(['getCityStatus', 'loaded'], true)
        .setIn(['getCityStatus', 'error'], false)
        .set('city', fromJS(action.city));
    case GET_CITY_FAIL:
      return city
        .setIn(['getCityStatus', 'loading'], false)
        .setIn(['getCityStatus', 'loaded'], false)
        .setIn(['getCityStatus', 'error'], action.error);
    default:
      return city;
  }
}

export default viewCityReducer;
