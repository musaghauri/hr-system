import React, { Component } from 'react';
import AnnouncementsListContainer from '@redux/Announcements/List';
import { withAuthSync } from '@utils/auth';
import { getAnnouncements } from '@redux/Announcements/List/actions';

class AnnouncementsList extends Component {
  static getInitialProps(props) {
    const { isServer, store } = props.ctx;
    store.dispatch(getAnnouncements());
    return { isServer };
  }

  render() {
    return <AnnouncementsListContainer {...this.props} />;
  }
}

export default withAuthSync(AnnouncementsList);
