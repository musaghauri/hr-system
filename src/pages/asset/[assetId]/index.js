import React, { Component } from 'react';
import ViewAssetContainer from '@redux/Assets/View';
import { withAuthSync } from '@utils/auth';
import { getAsset } from '@redux/Roles/Edit/actions';

class ViewAsset extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { assetId } = query;
    store.dispatch(getAsset(assetId));
    return { isServer };
  }
  render() {
    return <ViewAssetContainer {...this.props} />;
  }
}

export default withAuthSync(ViewAsset);
