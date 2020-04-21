import React, { Component } from 'react';
import EditAnnouncementContainer from '@redux/Announcements/Edit';
import { withAuthSync } from '@utils/auth';
import { getAnnouncement } from '@redux/Announcements/Edit/actions';

class EditAnnouncement extends Component {
  static getInitialProps(props) {
    const { isServer, store, query } = props.ctx;
    const { announcementId } = query;
    store.dispatch(getAnnouncement(announcementId));
    return { isServer, query };
  }

  render() {
    return <EditAnnouncementContainer {...this.props} />;
  }
}

export default withAuthSync(EditAnnouncement);
