import { createSelector } from 'reselect';

/**
 * Direct selector to the View Announcement state domain
 */
const selectViewAnnouncementDomain = () => state => state.get('viewAnnouncement');

const selectAnnouncement = () =>
  createSelector(selectViewAnnouncementDomain(), viewAnnouncementState =>
    viewAnnouncementState.get('announcement')
  );

const selectGetAnnouncementStatus = () =>
  createSelector(selectViewAnnouncementDomain(), viewAnnouncementState =>
    viewAnnouncementState.get('getAnnouncementStatus')
  );

export { selectAnnouncement, selectGetAnnouncementStatus };
