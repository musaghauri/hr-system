import React, { Component } from 'react';
import ViewAnnouncementContainer from '@redux/Announcements/View';
import { withAuthSync } from '@utils/auth';
import { getAnnouncement } from '@redux/Announcements/View/actions';

class ViewAnnouncement extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { announcementId } = query;
    store.dispatch(getAnnouncement(announcementId));
    return { isServer };
  }

  render() {
    return <ViewAnnouncementContainer {...this.props} />;
  }
}

export default withAuthSync(ViewAnnouncement);
