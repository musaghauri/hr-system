import React, { Component } from 'react';
import DocumentsList from '@components/views/Documents/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteDocument } from './actions';
import {
  selectHeadings,
  selectDocuments,
  selectGetDocumentsStatus,
  selectDeleteDocumentStatus,
} from './selectors';

class DocumentsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteDocument = (id, index) => {
    const { onDeleteDocument } = this.props;
    onDeleteDocument(id, index);
  };

  makeRows = documents => {
    const { headings } = this.props;
    return documents.toArray().map((document, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/document/[documentId]/edit',
                `/document/${document.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/document/[documentId]',
                `/document/${document.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deleteDocument(document.get('_id'), eIndex),
          };
        }
        return {
          value: document.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, documents, deleteDocumentStatus } = this.props;
    const rows = this.makeRows(documents.get('items'));
    if (deleteDocumentStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <DocumentsList headings={headings} documents={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  documents: selectDocuments(),
  getDocumentsStatus: selectGetDocumentsStatus(),
  deleteDocumentStatus: selectDeleteDocumentStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteDocument: bindActionCreators(deleteDocument, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentsListContainer);
