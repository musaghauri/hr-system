import { createSelector } from "reselect";

/**
 * Direct selector to the Employees Add state domain
 */
const selectEmployeesAddDomain = () => (state) => state.get("employeeAdd");
