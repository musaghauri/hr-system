import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Departmet state domain
 */
const selectAddDepartmetDomain = () => state => state.get('addDocument');

const selectAddDocumentStatus = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('addDocumentStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddDepartmetDomain(), addDepartmetState =>
    addDepartmetState.get('formDetails')
  );

export { selectAddDocumentStatus, selectFormDetails };
