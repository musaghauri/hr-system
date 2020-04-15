import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class RolesList extends Component {
  render() {
    const { headings, roles } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Roles</Header>
        <Link href="/roles/new">
          <Button
            content="Add Role"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={roles} name="role" />
      </Container>
    );
  }
}

export default RolesList;
