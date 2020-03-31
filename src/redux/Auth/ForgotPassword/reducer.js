import { fromJS } from "immutable";
import { RESET_REDUCER, UPDATE_FORM_DETAILS } from "./constants";

export const initialState = fromJS({
  formDetails: {
    email: {
      value: ""
    }
  }
});

function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_FORM_DETAILS:
      return state.setIn(
        ["formDetails", fromJS(action.name), "value"],
        fromJS(action.value)
      );
    default:
      return state;
  }
}

export default forgotPasswordReducer;
