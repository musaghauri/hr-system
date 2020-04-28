import { createSelector } from 'reselect';

/**
 * Direct selector to the Departments List state domain
 */
const selectDepartmentsListDomain = () => state => state.get('departmentsList');

const selectHeadings = () =>
  createSelector(selectDepartmentsListDomain(), departmentsListState =>
    departmentsListState.get('headings')
  );
const selectDepartments = () =>
  createSelector(selectDepartmentsListDomain(), departmentsListState =>
    departmentsListState.get('departments')
  );

const selectGetDepartmentsStatus = () =>
  createSelector(selectDepartmentsListDomain(), departmentsListState =>
    departmentsListState.get('getDepartmentsStatus')
  );

const selectDeleteDepartmentStatus = () =>
  createSelector(selectDepartmentsListDomain(), departmentsListState =>
    departmentsListState.get('deleteDepartmentStatus')
  );
export {
  selectHeadings,
  selectDepartments,
  selectGetDepartmentsStatus,
  selectDeleteDepartmentStatus,
};
