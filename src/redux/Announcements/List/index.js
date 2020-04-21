import React, { Component } from 'react';
import AnnouncementsList from '@components/views/Announcements/List';
import Router from 'next/router';
import { Icon, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteAnnouncement } from './actions';
import {
  selectHeadings,
  selectAnnouncements,
  selectGetAnnouncementsStatus,
  selectDeleteAnnouncementStatus,
} from './selectors';

class AnnouncementsListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  deleteAnnouncement = (id, index) => {
    const { onDeleteAnnouncement } = this.props;
    onDeleteAnnouncement(id, index);
  };

  makeRows = announcements => {
    const { headings } = this.props;
    return announcements.toArray().map((announcement, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/announcement/[announcementId]/edit',
                `/announcement/${announcement.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/announcement/[announcementId]',
                `/announcement/${announcement.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'delete') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () =>
              this.deleteAnnouncement(announcement.get('_id'), eIndex),
          };
        }
        return {
          value: announcement.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, announcements, deleteAnnouncementStatus } = this.props;
    const rows = this.makeRows(announcements.get('items'));
    if (deleteAnnouncementStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <AnnouncementsList headings={headings} announcements={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  announcements: selectAnnouncements(),
  getAnnouncementsStatus: selectGetAnnouncementsStatus(),
  deleteAnnouncementStatus: selectDeleteAnnouncementStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteAnnouncement: bindActionCreators(deleteAnnouncement, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnouncementsListContainer);
