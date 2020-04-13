import { fromJS } from "immutable";
import { RESET_REDUCER, DELETE_EMPLOYEE } from "./constants";
import _filter from 'lodash/filter';

export const initialState = fromJS({
  headings: [
    "ID",
    "Name",
    "Detail",
    "Department",
    "Active",
    "Status",
    "Edit",
    "Block",
    "View",
  ],
  employees: [
      ["1","employee1","cell","first","true","permanent","EDIT","DELETE","VIEW"],
      ["2","employee2","cell","second","true","permanent","EDIT","DELETE","VIEW"],
      ["3","employee3","cell","first","true","permanent","EDIT","DELETE","VIEW"],
      ["4","employee4","cell","second","true","permanent","EDIT","DELETE","VIEW"]
    ],
});

function employeesListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case DELETE_EMPLOYEE:
      console.log(action.id);
        return state.set("employees", state.get("employees").filter( employee => employee.first() !== action.id ) )
    default:
      return state;
  }
}

export default employeesListReducer;
