import React, { Component } from 'react';
import AddProjectContainer from '@redux/Projects/Add';
import { withAuthSync } from '@utils/auth';
import { getEmployees } from '@redux/Projects/Add/actions';

class AddProject extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    store.dispatch(getEmployees());
    return { isServer, query };
  }
  render() {
    return <AddProjectContainer {...this.props} />;
  }
}

export default withAuthSync(AddProject);
