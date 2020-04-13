import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Employee state domain
 */
const selectAddEmployeeDomain = () => state => state.get('addEmployee');
