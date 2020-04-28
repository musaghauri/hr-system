import React, { Component } from 'react';
import Wishlist from '@components/views/Wishlist/List';
import Router from 'next/router';
import { Icon, Header, Label } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteWish } from './actions';
import {
  selectHeadings,
  selectWishlist,
  selectGetWishlistStatus,
  selectDeleteWishStatus,
} from './selectors';

class WishlistContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteWish = (id, index) => {
    const { onDeleteWish } = this.props;
    onDeleteWish(id, index);
  };

  makeRows = wishlist => {
    const { headings } = this.props;
    return wishlist.toArray().map((wish, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/wish/[wishId]/edit',
                `/wish/${wish.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace('/wish/[wishId]', `/wish/${wish.get('_id')}`),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.deleteWish(wish.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'priority') {
          return {
            value: (
              <Label
                style={{ backgroundColor: wish.getIn(['priority', 'colour']) }}
                horizontal
              >
                {wish.getIn(['priority', 'name'])}
              </Label>
            ),
            isFunctional: false,
          };
        }
        return {
          value: wish.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, wishlist, deleteWishStatus } = this.props;
    const rows = this.makeRows(wishlist.get('items'));
    if (deleteWishStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <Wishlist headings={headings} wishlist={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  wishlist: selectWishlist(),
  getWishlistStatus: selectGetWishlistStatus(),
  deleteWishStatus: selectDeleteWishStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteWish: bindActionCreators(deleteWish, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WishlistContainer);
