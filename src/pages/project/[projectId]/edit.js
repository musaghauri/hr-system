import React, { Component } from 'react';
import EditProjectContainer from '@redux/Projects/Edit';
import { withAuthSync } from '@utils/auth';
import { getProject, getEmployees } from '@redux/Projects/Edit/actions';

class EditProject extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { projectId } = query;
    store.dispatch(getProject(projectId));
    store.dispatch(getEmployees());
    return { isServer, query };
  }

  render() {
    return <EditProjectContainer {...this.props} />;
  }
}

export default withAuthSync(EditProject);
