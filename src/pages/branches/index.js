import React, { Component } from 'react';
import BranchesListContainer from '@redux/Branches/List';
import { withAuthSync } from '@utils/auth';
import { getBranches } from '@redux/Branches/List/actions';

class BranchesList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getBranches());
    return { isServer };
  }

  render() {
    return <BranchesListContainer {...this.props} />;
  }
}

export default withAuthSync(BranchesList);
