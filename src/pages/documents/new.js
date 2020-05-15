import React, { Component } from 'react';
import AddDocumentContainer from '@redux/Documents/Add';
import { withAuthSync } from '@utils/auth';

class AddDocument extends Component {
  render() {
    return <AddDocumentContainer />;
  }
}

export default withAuthSync(AddDocument);
