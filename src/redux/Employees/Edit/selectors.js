import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Employee state domain
 */
const selectEditEmployeeDomain = () => state => state.get('editEmployee');
