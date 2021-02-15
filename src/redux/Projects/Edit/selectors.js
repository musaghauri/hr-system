import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Project state domain
 */
const selectEditProjectDomain = () => state => state.get('editProject');

const selectGetProjectStatus = () =>
  createSelector(selectEditProjectDomain(), editProjectState =>
    editProjectState.get('getProjectStatus')
  );

const selectEditProjectStatus = () =>
  createSelector(selectEditProjectDomain(), editProjectState =>
    editProjectState.get('editProjectStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditProjectDomain(), editProjectState =>
    editProjectState.get('formDetails')
  );

const selectEmployees = () =>
  createSelector(selectEditProjectDomain(), editProjectState =>
  editProjectState.get('employees')
  );

const selectGetEmployeesStatus = () =>
  createSelector(selectEditProjectDomain(), editProjectState =>
  editProjectState.get('getEmployeesStatus')
  );

export {
  selectGetProjectStatus,
  selectEditProjectStatus,
  selectFormDetails,
  selectEmployees,
  selectGetEmployeesStatus
};
