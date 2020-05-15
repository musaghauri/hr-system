import { createSelector } from 'reselect';

/**
 * Direct selector to the Documents List state domain
 */
const selectDocumentsListDomain = () => state => state.get('documentsList');

const selectHeadings = () =>
  createSelector(selectDocumentsListDomain(), documentsListState =>
    documentsListState.get('headings')
  );
const selectDocuments = () =>
  createSelector(selectDocumentsListDomain(), documentsListState =>
    documentsListState.get('documents')
  );

const selectGetDocumentsStatus = () =>
  createSelector(selectDocumentsListDomain(), documentsListState =>
    documentsListState.get('getDocumentsStatus')
  );

const selectDeleteDocumentStatus = () =>
  createSelector(selectDocumentsListDomain(), documentsListState =>
    documentsListState.get('deleteDocumentStatus')
  );
export {
  selectHeadings,
  selectDocuments,
  selectGetDocumentsStatus,
  selectDeleteDocumentStatus,
};
