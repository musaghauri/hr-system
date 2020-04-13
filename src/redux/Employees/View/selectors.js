import { createSelector } from "reselect";

/**
 * Direct selector to the Employees View state domain
 */
const selectEmployeesViewDomain = () => (state) => state.get("employeeView");
