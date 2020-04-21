import { createSelector } from 'reselect';

/**
 * Direct selector to the Edit Announcement state domain
 */
const selectEditAnnouncementDomain = () => state => state.get('editAnnouncement');

const selectGetAnnouncementStatus = () =>
  createSelector(selectEditAnnouncementDomain(), editAnnouncementState =>
    editAnnouncementState.get('getAnnouncementStatus')
  );

const selectEditAnnouncementStatus = () =>
  createSelector(selectEditAnnouncementDomain(), editAnnouncementState =>
    editAnnouncementState.get('editAnnouncementStatus')
  );

const selectFormDetails = () =>
  createSelector(selectEditAnnouncementDomain(), editAnnouncementState =>
    editAnnouncementState.get('formDetails')
  );

export {
  selectGetAnnouncementStatus,
  selectEditAnnouncementStatus,
  selectFormDetails,
};
