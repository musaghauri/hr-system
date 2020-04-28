import React, { Component } from 'react';
import EditPriorityContainer from '@redux/Priorities/Edit';
import { withAuthSync } from '@utils/auth';
import { getPriority } from '@redux/Priorities/Edit/actions';

class EditPriority extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { priorityId } = query;
    store.dispatch(getPriority(priorityId));
    return { isServer, query };
  }

  render() {
    return <EditPriorityContainer {...this.props} />;
  }
}

export default withAuthSync(EditPriority);
