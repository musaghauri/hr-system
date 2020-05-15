import { createSelector } from 'reselect';

/**
 * Direct selector to the View Document state domain
 */
const selectViewDocumentDomain = () => state => state.get('viewDocument');

const selectDocument = () =>
  createSelector(selectViewDocumentDomain(), viewDocumentState =>
    viewDocumentState.get('document')
  );

const selectGetDocumentStatus = () =>
  createSelector(selectViewDocumentDomain(), viewDocumentState =>
    viewDocumentState.get('getDocumentStatus')
  );

export { selectDocument, selectGetDocumentStatus };
