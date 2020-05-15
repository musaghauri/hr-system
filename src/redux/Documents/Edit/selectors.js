import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Document state domain
 */
const selectEditDocumentDomain = () => state => state.get('editDocument');

const selectGetDocumentStatus = () =>
  createSelector(selectEditDocumentDomain(), editDocumentState =>
    editDocumentState.get('getDocumentStatus')
  );

const selectEditDocumentStatus = () =>
  createSelector(selectEditDocumentDomain(), editDocumentState =>
    editDocumentState.get('editDocumentStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditDocumentDomain(), editDocumentState =>
    editDocumentState.get('formDetails')
  );

export { selectGetDocumentStatus, selectEditDocumentStatus, selectFormDetails };
