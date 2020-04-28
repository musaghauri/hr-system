import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_COUNTRY,
  ADD_COUNTRY_SUCCESS,
  ADD_COUNTRY_FAIL,
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
  addCountryStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addCountryReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_COUNTRY:
      return state
        .setIn(['addCountryStatus', 'loading'], true)
        .setIn(['addCountryStatus', 'loaded'], false)
        .setIn(['addCountryStatus', 'error'], false);
    case ADD_COUNTRY_SUCCESS:
      return state
        .setIn(['addCountryStatus', 'loading'], false)
        .setIn(['addCountryStatus', 'loaded'], true)
        .setIn(['addCountryStatus', 'error'], false);
    case ADD_COUNTRY_FAIL:
      return state
        .setIn(['addCountryStatus', 'loading'], false)
        .setIn(['addCountryStatus', 'loaded'], false)
        .setIn(['addCountryStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addCountryReducer;
