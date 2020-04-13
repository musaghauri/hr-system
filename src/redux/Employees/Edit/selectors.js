import { createSelector } from "reselect";

/**
 * Direct selector to the Employees Edit state domain
 */
const selectEmployeesEditDomain = () => (state) => state.get("employeeEdit");
