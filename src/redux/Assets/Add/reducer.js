import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  ADD_ASSET,
  ADD_ASSET_SUCCESS,
  ADD_ASSET_FAIL,
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
      placeholder: 'Enter asset name',
    },
    description: {
      name: 'description',
      label: 'Description',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'description',
      placeholder: 'Enter description',
      type: 'description',
    },
    cost: {
      name: 'cost',
      label: 'Cost',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'cost',
      placeholder: 'Enter cost',
      type: 'cost',
    },
    purchasedAt: {
      name: 'purchasedAt',
      label: 'Purchased At',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'purchasedAt',
      placeholder: 'Enter purchased at date',
      type: 'purchasedAt',
    },
    usedBy: {
      name: 'usedBy',
      label: 'Used By',
      status: true,
      errorText: '',
      value: '',
      rules: ['isRequired'],
      fieldName: 'usedBy',
      placeholder: 'Enter Names',
      type: 'usedBy',
    },
  },
  addAssetStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function addAssetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case ADD_ASSET:
      return state
        .setIn(['addAssetStatus', 'loading'], true)
        .setIn(['addAssetStatus', 'loaded'], false)
        .setIn(['addAssetStatus', 'error'], false);
    case ADD_ASSET_SUCCESS:
      return state
        .setIn(['addAssetStatus', 'loading'], false)
        .setIn(['addAssetStatus', 'loaded'], true)
        .setIn(['addAssetStatus', 'error'], false);
    case ADD_ASSET_FAIL:
      return state
        .setIn(['addAssetStatus', 'loading'], false)
        .setIn(['addAssetStatus', 'loaded'], false)
        .setIn(['addAssetStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default addAssetReducer;
