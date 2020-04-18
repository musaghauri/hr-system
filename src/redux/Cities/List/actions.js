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

export function resetReducer() {
  return {
    type: RESET_REDUCER,
  };
}

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name,
    value,
  };
}

export function deleteCity(id, index) {
  return {
    type: DELETE_CITY,
    id,
    index,
  };
}

export function deleteCitySuccess(index) {
  return {
    type: DELETE_CITY_SUCCESS,
    index,
  };
}

export function deleteCityFail(error) {
  return {
    type: DELETE_CITY_FAIL,
    error,
  };
}

export function getCities() {
  return {
    type: GET_CITIES,
  };
}

export function getCitiesSuccess(cities) {
  return {
    type: GET_CITIES_SUCCESS,
    cities,
  };
}

export function getCitiesFail(error) {
  return {
    type: GET_CITIES_FAIL,
    error,
  };
}
