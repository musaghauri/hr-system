import {
  RESET_REDUCER,
  GET_CITY,
  GET_CITY_SUCCESS,
  GET_CITY_FAIL,
} from './constants';

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function getCity(id) {
  return {
    type: GET_CITY,
    id,
  };
}

export function getCitySuccess(city) {
  return {
    type: GET_CITY_SUCCESS,
    city,
  };
}

export function getCityFail(error) {
  return {
    type: GET_CITY_FAIL,
    error,
  };
}
