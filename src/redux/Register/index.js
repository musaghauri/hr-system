import React, { Component } from "react";
import Register from "@components/Register";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, updateValue, addAnotherEntry } from "./actions";
import { selectFormDetails } from "./selectors";

class RegisterContainer extends Component {
  submitForm = () => {
    console.log("submitted");
  };

  componentWillUnmount() {
    this.props.onResetReducer();
  }
  render() {
    const { formDetails, onUpdateValue, onAddAnotherEntry } = this.props;
    return (
      <div style={{ marginLeft: "150px" }}>
        <Register
          formDetails={formDetails}
          updateValue={onUpdateValue}
          handleSubmit={this.submitForm}
          addAnotherEntry={onAddAnotherEntry}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  formDetails: selectFormDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateValue: bindActionCreators(updateValue, dispatch),
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onAddAnotherEntry: bindActionCreators(addAnotherEntry, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
