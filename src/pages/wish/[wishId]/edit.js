import React, { Component } from 'react';
import EditWishlistContainer from '@redux/Wishlist/Edit';
import { withAuthSync } from '@utils/auth';
import { getWish, getPriorities } from '@redux/Wishlist/Edit/actions';

class EditWish extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { wishId } = query;
    store.dispatch(getWish(wishId));
    store.dispatch(getPriorities());
    return { isServer, query };
  }

  render() {
    return <EditWishlistContainer {...this.props} />;
  }
}

export default withAuthSync(EditWish);
