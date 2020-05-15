import React, { Component } from 'react';
import DocumentsListContainer from '@redux/Documents/List';
import { withAuthSync } from '@utils/auth';
import { getDocuments } from '@redux/Documents/List/actions';

class DocumentsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getDocuments());
    return { isServer };
  }

  render() {
    return <DocumentsListContainer {...this.props} />;
  }
}

export default withAuthSync(DocumentsList);
