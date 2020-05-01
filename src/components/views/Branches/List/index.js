import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class BranchesList extends Component {
  render() {
    const { headings, branches } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Branches</Header>
        <Link href="/branches/new">
          <Button
            content="Add Branch"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={branches}
          name="branch"
        />
      </Container>
    );
  }
}

export default BranchesList;
