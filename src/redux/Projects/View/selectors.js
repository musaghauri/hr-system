import { createSelector } from 'reselect';

/**
 * Direct selector to the View Project state domain
 */
const selectViewProjectDomain = () => state => state.get('viewProject');

const selectProject = () =>
  createSelector(selectViewProjectDomain(), viewProjectState =>
    viewProjectState.get('project')
  );

const selectGetProjectStatus = () =>
  createSelector(selectViewProjectDomain(), viewProjectState =>
    viewProjectState.get('getProjectStatus')
  );

export { selectProject, selectGetProjectStatus };
