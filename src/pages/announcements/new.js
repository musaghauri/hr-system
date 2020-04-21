import React, { Component } from 'react';
import AddAnnouncementContainer from '@redux/Announcements/Add';
import { withAuthSync } from '@utils/auth';

class AddAnnouncement extends Component {
  render() {
    return <AddAnnouncementContainer />;
  }
}

export default withAuthSync(AddAnnouncement);
