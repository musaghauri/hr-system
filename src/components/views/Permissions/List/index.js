import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class PermissionsList extends Component {
  render() {
    const { headings, permissions } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Permissions</Header>
        <Link href="/permissions/new">
          <Button
            content="Add Permission"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={permissions}
          name="permission"
        />
      </Container>
    );
  }
}

export default PermissionsList;
