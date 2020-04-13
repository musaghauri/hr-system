import React, { Component } from 'react';
import EmployeesList from '@components/views/Employees/List';
import Router from 'next/router';
import { Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { resetReducer } from './actions';
import { selectHeadings, selectEmployees } from './selectors';

class EmployeesListContainer extends Component {
  componentWillUnmount() {
    const { onResetReducer } = this.props;
    onResetReducer();
  }

  blockEmployee = (id, index) => {
    console.log('BLOCK EMPLOYEE: ', { id, index });
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
                `/employee/${employee.get('id')}/edit`
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
                `/employee/${employee.get('id')}`
              ),
          };
        }
        if (heading.get('name') === 'block') {
          return {
            value: <Icon name="trash alternate" color="red" />,
            isFunctional: true,
            handleChange: () => this.blockEmployee(employee.get('id'), eIndex),
          };
        }
        return {
          value: employee.get(heading.get('name')),
          isFunctional: false,
        };
      })
    );
  };

  render() {
    const { headings, employees } = this.props;
    const rows = this.makeRows(employees);
    return <EmployeesList headings={headings} employees={rows} />;
  }
}
const mapStateToProps = createStructuredSelector({
  headings: selectHeadings(),
  employees: selectEmployees(),
});

function mapDispatchToProps(dispatch) {
  return {
    onResetReducer: bindActionCreators(resetReducer, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesListContainer);
