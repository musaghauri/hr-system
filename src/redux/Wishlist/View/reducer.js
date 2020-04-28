import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  GET_WISH,
  GET_WISH_SUCCESS,
  GET_WISH_FAIL,
} from './constants';

export const initialState = fromJS({
  wish: {},

  getWishStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function viewWishReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case GET_WISH:
      return state
        .setIn(['getWishStatus', 'loading'], true)
        .setIn(['getWishStatus', 'loaded'], false)
        .setIn(['getWishStatus', 'error'], false);
    case GET_WISH_SUCCESS:
      return state
        .setIn(['getWishStatus', 'loading'], false)
        .setIn(['getWishStatus', 'loaded'], true)
        .setIn(['getWishStatus', 'error'], false)
        .set('wish', fromJS(action.wish));
    case GET_WISH_FAIL:
      return state
        .setIn(['getWishStatus', 'loading'], false)
        .setIn(['getWishStatus', 'loaded'], false)
        .setIn(['getWishStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default viewWishReducer;
