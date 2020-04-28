import React, { Component } from 'react';
import ViewAnnouncement from '@components/views/Announcements/View';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectAnnouncement, selectGetAnnouncementStatus } from './selectors';

class ViewAnnouncementContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  render() {
    const { announcement } = this.props;
    return <ViewAnnouncement announcement={announcement} />;
  }
}
const mapStateToProps = createStructuredSelector({
  announcement: selectAnnouncement(),
  getAnnouncementStatus: selectGetAnnouncementStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAnnouncementContainer);
