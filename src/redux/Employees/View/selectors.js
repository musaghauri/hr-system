import { createSelector } from 'reselect';

/**
 * Direct selector to the View Employee state domain
 */
const selectViewEmployeeDomain = () => state => state.get('viewEmployee');
