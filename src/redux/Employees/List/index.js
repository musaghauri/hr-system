import React, { Component } from 'react';
import EmployeesList from '@components/views/Employees/List';
import Router from 'next/router';
import { Icon, Label, Header } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer, deleteEmployee } from './actions';
import { selectHeadings, selectEmployees, selectDeleteEmployeeStatus } from './selectors';

class EmployeesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  blockEmployee = (id, index) => {
    const { onDeleteEmployee } = this.props;
    onDeleteEmployee(id, index);
  };

  makeRows = employees => {
    const { headings } = this.props;
    return employees.toArray().map((employee, eIndex) =>
      headings.toArray().map(heading => {
        if (heading.get('name') === 'edit') {
          return {
            value: <Icon name="edit" color="yellow" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/employee/[employeeId]/edit',
                `/employee/${employee.get('_id')}/edit`
              ),
          };
        }
        if (heading.get('name') === 'view') {
          return {
            value: <Icon name="eye" color="blue" />,
            isFunctional: true,
            handleChange: () =>
              Router.replace(
                '/employee/[employeeId]',
                `/employee/${employee.get('_id')}`
              ),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.blockEmployee(employee.get('_id'), eIndex),
          };
        }
        if (heading.get('name') === 'isActive') {
          return {
            value: employee.get(heading.get('name')) ? (
              <Icon name="check" color="green" />
            ) : (
              <Icon name="times" color="red" />
            ),
            isFunctional: false,
          };
        }
        if (heading.get('name') === 'department') {
          let department = employee.getIn(['officialInformation','department', 'name']);
          return {
            value: department && (
              <Label color="green" horizontal>
                {department}
              </Label>
            ),
            isFunctional: false,
          };
        }
        else{
          return {
            value: employee.get(heading.get('name')),
            isFunctional: false,
          };
        }
      })
    );
  };

  render() {
    const { headings, employees, deleteEmployeeStatus } = this.props;
    const rows = employees && this.makeRows(employees.get('items'));
    if (deleteEmployeeStatus.get('loading'))
      return (
        <Header as="h1" textAlign="center">
          Loading ...
        </Header>
      );
    return <EmployeesList headings={headings} employees={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  employees: selectEmployees(),
  deleteEmployeeStatus: selectDeleteEmployeeStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
    onDeleteEmployee: bindActionCreators(deleteEmployee, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListContainer);
