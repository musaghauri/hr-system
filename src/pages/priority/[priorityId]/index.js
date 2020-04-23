import React, { Component } from 'react';
import ViewPriorityContainer from '@redux/Priorities/View';
import { withAuthSync } from '@utils/auth';
import { getPriority } from '@redux/Priorities/View/actions';

class ViewPriority extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { priorityId } = query;
    store.dispatch(getPriority(priorityId));
    return { isServer };
  }

  render() {
    return <ViewPriorityContainer {...this.props} />;
  }
}

export default withAuthSync(ViewPriority);
