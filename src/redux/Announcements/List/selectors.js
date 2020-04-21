import { createSelector } from 'reselect';

/**
 * Direct selector to the Announcements List state domain
 */
const selectAnnouncementsListDomain = () => state => state.get('announcementsList');

const selectHeadings = () =>
  createSelector(selectAnnouncementsListDomain(), announcementsListState =>
    announcementsListState.get('headings')
  );
const selectAnnouncements = () =>
  createSelector(selectAnnouncementsListDomain(), announcementsListState =>
    announcementsListState.get('announcements')
  );

const selectGetAnnouncementsStatus = () =>
  createSelector(selectAnnouncementsListDomain(), announcementsListState =>
    announcementsListState.get('getAnnouncementsStatus')
  );

const selectDeleteAnnouncementStatus = () =>
  createSelector(selectAnnouncementsListDomain(), announcementsListState =>
    announcementsListState.get('deleteAnnouncementStatus')
  );
export {
  selectHeadings,
  selectAnnouncements,
  selectGetAnnouncementsStatus,
  selectDeleteAnnouncementStatus,
};
