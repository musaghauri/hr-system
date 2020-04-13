import React, { Component } from "react";
import EmployeesList from "@components/views/Employees/List";
import Router from 'next/router';
// import _map from 'lodash/map';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { resetReducer, deleteEmployee } from "./actions";
import { selectHeading, selectEmployees } from "./selectors";

class EmployeesListContainer extends Component {
  componentWillUnmount() {
    this.props.onResetReducer();
  }
  makeRows = (employees) =>{
    const {onDeleteEmployee} = this.props;
    let rows = employees.map((employee, eIndex)=>{
      return employee.map((attribute, attrIndex)=>{
        if(attribute === "EDIT") return {value: attribute, isFunctional: true, handleChange: ()=> Router.replace(`/employee/${employee.first()}/edit`) };
        if(attribute === "VIEW") return {value: attribute, isFunctional: true,  handleChange: ()=> Router.replace(`/employee/${employee.first()}`)};
        if(attribute === "DELETE") return {value: attribute, isFunctional: true,  handleChange: ()=> onDeleteEmployee(employee.first())};
        else return {value: attribute, isFunctional: false}
      })
    })
    return rows;
  }


  render() {
    const { headings, employees } = this.props;
    const rows = this.makeRows(employees);
    return <EmployeesList headings={headings} employees={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeading(),
  employees: selectEmployees(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteEmployee: bindActionCreators(deleteEmployee, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListContainer);
