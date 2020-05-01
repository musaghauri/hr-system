import React, { Component } from 'react';
import ViewBranchContainer from '@redux/Branches/View';
import { withAuthSync } from '@utils/auth';
import { getBranch } from '@redux/Branches/View/actions';

class ViewBranch extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { branchId } = query;
    store.dispatch(getBranch(branchId));
    return { isServer };
  }

  render() {
    return <ViewBranchContainer {...this.props} />;
  }
}

export default withAuthSync(ViewBranch);
