import { fromJS } from 'immutable';
import {
  RESET_REDUCER,
  UPDATE_VALUE,
  DELETE_PROJECT,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAIL,
} from './constants';

export const initialState = fromJS({
  headings: [
    {
      label: 'ID',
      name: 'id',
    },
    {
      label: 'Name',
      name: 'name',
    },
    {
      label: 'Edit',
      name: 'edit',
    },
    {
      label: 'Delete',
      name: 'delete',
    },
    {
      label: 'View',
      name: 'view',
    },
  ],
  projects: {
    items: [],
    total_count: 0,
  },
  getProjectsStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
  deleteProjectStatus: {
    loading: false,
    loaded: false,
    error: false,
  },
});

function projectsListReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return initialState;
    case UPDATE_VALUE:
      return state.setIn(action.name, fromJS(action.value));
    case DELETE_PROJECT:
      return state
        .setIn(['deleteProjectStatus', 'loading'], true)
        .setIn(['deleteProjectStatus', 'loaded'], false)
        .setIn(['deleteProjectStatus', 'error'], false);
    case DELETE_PROJECT_SUCCESS:
      return state
        .setIn(['deleteProjectStatus', 'loading'], false)
        .setIn(['deleteProjectStatus', 'loaded'], true)
        .setIn(['deleteProjectStatus', 'error'], false)
        .deleteIn(['projects', 'items', action.index]);
    case DELETE_PROJECT_FAIL:
      return state
        .setIn(['deleteProjectStatus', 'loading'], false)
        .setIn(['deleteProjectStatus', 'loaded'], false)
        .setIn(['deleteProjectStatus', 'error'], action.error);
    case GET_PROJECTS:
      return state
        .setIn(['getProjectsStatus', 'loading'], true)
        .setIn(['getProjectsStatus', 'loaded'], false)
        .setIn(['getProjectsStatus', 'error'], false);
    case GET_PROJECTS_SUCCESS:
      return state
        .setIn(['getProjectsStatus', 'loading'], false)
        .setIn(['getProjectsStatus', 'loaded'], true)
        .setIn(['getProjectsStatus', 'error'], false)
        .set('projects', fromJS(action.projects));
    case GET_PROJECTS_FAIL:
      return state
        .setIn(['getProjectsStatus', 'loading'], false)
        .setIn(['getProjectsStatus', 'loaded'], false)
        .setIn(['getProjectsStatus', 'error'], action.error);
    default:
      return state;
  }
}

export default projectsListReducer;
