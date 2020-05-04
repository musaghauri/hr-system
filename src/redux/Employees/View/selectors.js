import { createSelector } from 'reselect';

/**
 * Direct selector to the View Employee state domain
 */
const selectViewEmployeeDomain = () => state => state.get('viewEmployee');

const selectEmployee = () =>
  createSelector(selectViewEmployeeDomain(), viewEmployeeState =>
    viewEmployeeState.get('employee')
  );

const selectGetEmployeeStatus = () =>
  createSelector(selectViewEmployeeDomain(), viewEmployeeState =>
    viewEmployeeState.get('getEmployeeStatus')
  );

export { selectEmployee, selectGetEmployeeStatus };
