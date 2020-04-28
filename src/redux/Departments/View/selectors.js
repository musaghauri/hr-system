import { createSelector } from 'reselect';

/**
 * Direct selector to the View Department state domain
 */
const selectViewDepartmentDomain = () => state => state.get('viewDepartment');

const selectDepartment = () =>
  createSelector(selectViewDepartmentDomain(), viewDepartmentState =>
    viewDepartmentState.get('department')
  );

const selectGetDepartmentStatus = () =>
  createSelector(selectViewDepartmentDomain(), viewDepartmentState =>
    viewDepartmentState.get('getDepartmentStatus')
  );

export { selectDepartment, selectGetDepartmentStatus };
