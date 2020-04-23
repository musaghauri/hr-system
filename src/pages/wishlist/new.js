import React, { Component } from 'react';
import AddWishContainer from '@redux/Wishlist/Add';
import { withAuthSync } from '@utils/auth';
import { getPriorities } from '@redux/Wishlist/Add/actions';

class AddWish extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getPriorities());
    return { isServer };
  }

  render() {
    return <AddWishContainer />;
  }
}

export default withAuthSync(AddWish);
