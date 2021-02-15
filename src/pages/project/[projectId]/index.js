import React, { Component } from 'react';
import ViewProjectContainer from '@redux/Projects/View';
import { withAuthSync } from '@utils/auth';
import { getProject } from '@redux/Projects/View/actions';

class ViewProject extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { projectId } = query;
    store.dispatch(getProject(projectId));
    return { isServer };
  }

  render() {
    return <ViewProjectContainer {...this.props} />;
  }
}

export default withAuthSync(ViewProject);
