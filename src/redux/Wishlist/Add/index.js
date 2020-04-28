import React, { Component } from 'react';
import AddWish from '@components/views/Wishlist/Form';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { submitFormData } from '@utils/helperFuncs';
import { validateFormData } from '@utils/validations';
import { resetReducer, addWish, updateValue } from './actions';
import { selectFormDetails, selectAddWishStatus, selectPriorities, } from './selectors';

class AddWishlistContainer extends Component {
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
    const { onAddWish } = this.props;
    const wishData = submitFormData(formDetails);
    onAddWish(wishData);
  };

  render() {
    const { addWishStatus, onUpdateValue, formDetails, priorites } = this.props;
    return (
      <AddWish
        submitLabel="Add Wish"
        successMessage="Wish added successfully!"
        submitColor="green"
        formDetails={formDetails}
        submitStatus={addWishStatus}
        priorites={priorites}
        validateForm={this.validateForm}
        handleSubmit={this.submitForm}
        updateValue={onUpdateValue}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addWishStatus: selectAddWishStatus(),
  formDetails: selectFormDetails(),
  priorites: selectPriorities(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAddWish: bindActionCreators(addWish, dispatch),
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddWishlistContainer);
