import React, { Component } from 'react';
import EditAnnouncement from '@components/views/Announcements/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editAnnouncement, updateValue } from './actions';
import {
  selectFormDetails,
  selectEditAnnouncementStatus,
  selectGetAnnouncementStatus,
} from './selectors';

class EditAnnouncementContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  updateFormDetails = formDetails => {
    const { onUpdateValue } = this.props;
    onUpdateValue('formDetails', formDetails);
  };

  validateForm = formData => validateFormData(formData);

  submitForm = formDetails => {
    const { onEditAnnouncement, query } = this.props;
    const { announcementId } = query;
    const announcementData = submitFormData(formDetails);
    onEditAnnouncement(announcementData, announcementId);
  };

  render() {
    const { editAnnouncementStatus, onUpdateValue, formDetails } = this.props;
    return (
      <EditAnnouncement
        submitLabel="Edit Announcement"
        successMessage="Announcement edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editAnnouncementStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getAnnouncementStatus: selectGetAnnouncementStatus(),
  editAnnouncementStatus: selectEditAnnouncementStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditAnnouncement: bindActionCreators(editAnnouncement, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAnnouncementContainer);
