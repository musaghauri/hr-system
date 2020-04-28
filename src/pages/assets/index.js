import React, { Component } from 'react';
import AssestsListContainer from '@redux/Assets/List';
import { withAuthSync } from '@utils/auth';
import { getAssets } from '@redux/Assets/List/actions';

class AssetsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getAssets());
    return { isServer };
  }

  render() {
    return <AssestsListContainer {...this.props} />;
  }
}

export default withAuthSync(AssetsList);
