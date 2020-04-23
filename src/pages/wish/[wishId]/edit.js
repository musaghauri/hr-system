import React, { Component } from 'react';
import EditWishContainer from '@redux/Wishlist/Edit';
import { withAuthSync } from '@utils/auth';
import { getWish } from '@redux/Wishlist/Edit/actions';

class EditWish extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { wishId } = query;
    store.dispatch(getWish(wishId));
    return { isServer, query };
  }

  render() {
    return <EditWishContainer {...this.props} />;
  }
}

export default withAuthSync(EditWish);
