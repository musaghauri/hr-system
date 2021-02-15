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
  
  export function resetReducer() {
    return {
      type: RESET_REDUCER,
    };
  }
  
  export function updateValue(name, value) {
    return {
      type: UPDATE_VALUE,
      name,
      value,
    };
  }
  
  export function deleteProject(id, index) {
    return {
      type: DELETE_PROJECT,
      id,
      index,
    };
  }
  
  export function deleteProjectSuccess(index) {
    return {
      type: DELETE_PROJECT_SUCCESS,
      index,
    };
  }
  
  export function deleteProjectFail(error) {
    return {
      type: DELETE_PROJECT_FAIL,
      error,
    };
  }
  
  export function getProjects() {
    return {
      type: GET_PROJECTS,
    };
  }
  
  export function getProjectsSuccess(projects) {
    return {
      type: GET_PROJECTS_SUCCESS,
      projects,
    };
  }
  
  export function getProjectsFail(error) {
    return {
      type: GET_PROJECTS_FAIL,
      error,
    };
  }
  