import { createSelector } from 'reselect';

/**
 * Direct selector to the Add Announcement state domain
 */
const selectAddAnnouncementDomain = () => state => state.get('addAnnouncement');

const selectAddAnnouncementStatus = () =>
  createSelector(selectAddAnnouncementDomain(), addAnnouncementState =>
    addAnnouncementState.get('addAnnouncementStatus')
  );

const selectFormDetails = () =>
  createSelector(selectAddAnnouncementDomain(), addAnnouncementState =>
    addAnnouncementState.get('formDetails')
  );

export { selectAddAnnouncementStatus, selectFormDetails };
