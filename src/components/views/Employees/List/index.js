import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class EmployeesList extends Component {
  render() {
    const { headings, employees } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Employees List</Header>
        <Link href="employees/new">
          <Button
            content="Add Employee"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={employees} name="employee" />
      </Container>
    );
  }
}

export default EmployeesList;
