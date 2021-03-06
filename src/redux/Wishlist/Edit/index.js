import React, { Component } from 'react';
import EditWish from '@components/views/Wishlist/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, editWish, updateValue  } from './actions';
import {
  selectFormDetails,
  selectEditWishStatus,
  selectGetWishStatus,
  selectPriorities,
} from './selectors';

class EditWishlistContainer extends Component {
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
    const { onEditWish, query } = this.props;
    const { wishId } = query;
    const wishData = submitFormData(formDetails);
    onEditWish(wishData, wishId);
  };

  render() {
    const { editWishStatus, onUpdateValue, formDetails, priorites } = this.props;
    return (
      <EditWish
        submitLabel="Edit Wish"
        successMessage="Wish edited successfully!"
        submitColor="yellow"
        formDetails={formDetails}
        submitStatus={editWishStatus}
        priorites={priorites}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  getWishStatus: selectGetWishStatus(),
  editWishStatus: selectEditWishStatus(),
  formDetails: selectFormDetails(),
  priorites: selectPriorities(),
});

function mapDispatchToProps(dispatch) {
  return {
    onEditWish: bindActionCreators(editWish, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditWishlistContainer);
