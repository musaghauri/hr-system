import React, { Component } from 'react';
import AddAssetContainer from '@redux/Assets/Add';
import { withAuthSync } from '@utils/auth';

class AddAsset extends Component {
  render() {
    return <AddAssetContainer />;
  }
}

export default withAuthSync(AddAsset);
