import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class DepartmentsList extends Component {
  render() {
    const { headings, departments } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Departments</Header>
        <Link href="/departments/new">
          <Button
            content="Add Department"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={departments}
          name="department"
        />
      </Container>
    );
  }
}

export default DepartmentsList;
