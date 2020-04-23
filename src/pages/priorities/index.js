import React, { Component } from 'react';
import PrioritiesListContainer from '@redux/Priorities/List';
import { withAuthSync } from '@utils/auth';
import { getPriorities } from '@redux/Priorities/List/actions';

class PrioritiesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getPriorities());
    return { isServer };
  }

  render() {
    return <PrioritiesListContainer {...this.props} />;
  }
}

export default withAuthSync(PrioritiesList);
