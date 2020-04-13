import { fromJS } from "immutable";
import { RESET_REDUCER } from "./constants";

export const initialState = fromJS({});

function employeesEditReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    default:
      return state;
  }
}

export default employeesEditReducer;
