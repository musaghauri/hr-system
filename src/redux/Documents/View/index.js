import React, { Component } from 'react';
import ViewDocument from '@components/views/Documents/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectDocument, selectGetDocumentStatus } from './selectors';

class ViewDocumentContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { document } = this.props;
    return <ViewDocument document={document} />;
  }
}
const mapStateToProps = createStructuredSelector({
  document: selectDocument(),
  getDocumentStatus: selectGetDocumentStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewDocumentContainer);
