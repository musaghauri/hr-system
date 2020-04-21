import React, { Component } from 'react';
import AddAnnouncement from '@components/views/Announcements/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addAnnouncement, updateValue } from './actions';
import { selectFormDetails, selectAddAnnouncementStatus } from './selectors';

class AddAnnouncementContainer extends Component {
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
    const { onAddAnnouncement } = this.props;
    const announcementData = submitFormData(formDetails);
    onAddAnnouncement(announcementData);
  };

  render() {
    const { addAnnouncementStatus, onUpdateValue, formDetails } = this.props;
    return (
      <AddAnnouncement
        submitLabel="Add Announcement"
        successMessage="Announcement added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addAnnouncementStatus}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addAnnouncementStatus: selectAddAnnouncementStatus(),
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddAnnouncement: bindActionCreators(addAnnouncement, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAnnouncementContainer);
