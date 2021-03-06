import { fromJS } from "immutable";
import { RESET_REDUCER, UPDATE_VALUE } from "./constants";

export const initialState = fromJS({
  formDetails: {
    password: {
      value: ""
    },
    confirmPassword: {
      value: ""
    }
  }
});

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    default:
      return state;
  }
}

export default resetPasswordReducer;
