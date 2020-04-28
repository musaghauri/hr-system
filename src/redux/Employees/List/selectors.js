import { createSelector } from 'reselect';

/**
 * Direct selector to the Employees List state domain
 */
const selectEmployeesListDomain = () => state => state.get('employeesList');

const selectHeadings = () =>
  createSelector(selectEmployeesListDomain(), employeesListState =>
    employeesListState.get('headings')
  );
const selectEmployees = () =>
  createSelector(selectEmployeesListDomain(), employeesListState =>
    employeesListState.get('employees')
  );
export { selectHeadings, selectEmployees };
