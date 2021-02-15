import React, { Component } from 'react';
import ProjectsListContainer from '@redux/Projects/List';
import { withAuthSync } from '@utils/auth';
import { getProjects } from '@redux/Projects/List/actions';

class ProjectsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getProjects());
    return { isServer };
  }

  render() {
    return <ProjectsListContainer {...this.props} />;
  }
}

export default withAuthSync(ProjectsList);
