import React, { Component } from 'react';
import AssetsList from '@components/views/Assets/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteAsset, getAssets } from './actions';
import {
  selectHeadings,
  selectAssets,
  selectGetAssetsStatus,
  selectDeleteAssetStatus,
} from './selectors';

class AssetsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteAsset = (id, index) => {
    const { onDeleteAsset } = this.props;
    onDeleteAsset(id, index);
  };

  makeRows = assets => {
    const { headings } = this.props;
    return assets.toArray().map((asset, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/asset/[assetId]/edit',
                `/asset/${asset.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace('/asset/[assetId]', `/asset/${asset.get('_id')}`),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteAsset(asset.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'usedBy') {
          return {
            value: asset.getIn(['usedBy', 'name']) ? (
              <Label color="green" horizontal>
                {asset.getIn(['usedBy', 'name'])}
              </Label>
            ) : (
              <Label color="red" horizontal>
                Not Asssigned
              </Label>
            ),
            isFunctional: false,
          };
        }
        return {
          value: asset.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, assets, deleteAssetStatus } = this.props;
    const rows = this.makeRows(assets.get('items'));
    if (deleteAssetStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <AssetsList headings={headings} assets={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  assets: selectAssets(),
  getAssetsStatus: selectGetAssetsStatus(),
  deleteAssetStatus: selectDeleteAssetStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onGetAssets: bindActionCreators(getAssets, dispatch),
    onDeleteAsset: bindActionCreators(deleteAsset, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetsListContainer);
