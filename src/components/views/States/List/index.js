import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class StatesList extends Component {
  render() {
    const { headings, states } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">States</Header>
        <Link href="/states/new">
          <Button
            content="Add State"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={states} name="state" />
      </Container>
    );
  }
}

export default StatesList;
