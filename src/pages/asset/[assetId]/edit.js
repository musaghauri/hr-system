import React, { Component } from 'react';
import EditAssetContainer from '@redux/Assets/Edit';
import { withAuthSync } from '@utils/auth';
import { getAsset } from '@redux/Assets/Edit/actions';

class EditAsset extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { assetId } = query;
    store.dispatch(getAsset(assetId));
    return { isServer, query };
  }
  render() {
    return <EditAssetContainer {...this.props} />;
  }
}

export default withAuthSync(EditAsset);
