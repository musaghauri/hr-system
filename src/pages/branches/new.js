import React, { Component } from 'react';
import AddBranchContainer from '@redux/Branches/Add';
import { withAuthSync } from '@utils/auth';
import { getDepartments, getCountries } from '@redux/Branches/Add/actions';

class AddBranch extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getDepartments());
    store.dispatch(getCountries());
    return { isServer };
  }
  render() {
    return <AddBranchContainer />;
  }
}

export default withAuthSync(AddBranch);
