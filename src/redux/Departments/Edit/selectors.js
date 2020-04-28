import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Department state domain
 */
const selectEditDepartmentDomain = () => state => state.get('editDepartment');

const selectGetDepartmentStatus = () =>
  createSelector(selectEditDepartmentDomain(), editDepartmentState =>
    editDepartmentState.get('getDepartmentStatus')
  );

const selectEditDepartmentStatus = () =>
  createSelector(selectEditDepartmentDomain(), editDepartmentState =>
    editDepartmentState.get('editDepartmentStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditDepartmentDomain(), editDepartmentState =>
    editDepartmentState.get('formDetails')
  );

export {
  selectGetDepartmentStatus,
  selectEditDepartmentStatus,
  selectFormDetails,
};
