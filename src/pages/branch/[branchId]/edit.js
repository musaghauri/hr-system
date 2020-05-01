import React, { Component } from 'react';
import EditBranchContainer from '@redux/Branches/Edit';
import { withAuthSync } from '@utils/auth';
import { getBranch } from '@redux/Branches/Edit/actions';
import { getDepartments, getCountries } from '@redux/Branches/Edit/actions';

class EditBranch extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { branchId } = query;
    store.dispatch(getBranch(branchId));
    store.dispatch(getDepartments());
    store.dispatch(getCountries());
    return { isServer, query };
  }

  render() {
    return <EditBranchContainer {...this.props} />;
  }
}

export default withAuthSync(EditBranch);
