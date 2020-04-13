import { createSelector } from "reselect";

/**
 * Direct selector to the Employees List state domain
 */
const selectEmployeesListDomain = () => (state) => state.get("employeesList");

const selectHeading = () =>
  createSelector(selectEmployeesListDomain(), (employeeListState) =>
    employeeListState.get("headings")
  );
const selectEmployees = () =>
  createSelector(selectEmployeesListDomain(), (employeeListState) =>
    employeeListState.get("employees")
  );
export { selectHeading, selectEmployees };
