import { createSelector } from 'reselect';

/**
 * Direct selector to the Projects List state domain
 */
const selectProjectsListDomain = () => state => state.get('projectsList');

const selectHeadings = () =>
  createSelector(selectProjectsListDomain(), projectsListState =>
    projectsListState.get('headings')
  );
const selectProjects = () =>
  createSelector(selectProjectsListDomain(), projectsListState =>
    projectsListState.get('projects')
  );

const selectGetProjectsStatus = () =>
  createSelector(selectProjectsListDomain(), projectsListState =>
    projectsListState.get('getProjectsStatus')
  );

const selectDeleteProjectStatus = () =>
  createSelector(selectProjectsListDomain(), projectsListState =>
    projectsListState.get('deleteProjectStatus')
  );
export {
  selectHeadings,
  selectProjects,
  selectGetProjectsStatus,
  selectDeleteProjectStatus,
};
