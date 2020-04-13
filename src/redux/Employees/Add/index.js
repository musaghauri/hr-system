import React, { Component } from "react";
import AddForm from "@components/views/Employees/Form";
import Router from "next/router";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer} from "./actions";

class AddEmployeeContainer extends Component {
  componentWillUnmount() {
    this.props.onResetReducer();
  }

  render() {
    return <AddForm />;
  }
}
const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEmployeeContainer);
