import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class PrioritiesList extends Component {
  render() {
    const { headings, priorities } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Priorities</Header>
        <Link href="/priorities/new">
          <Button
            content="Add Priority"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={priorities}
          name="priority"
        />
      </Container>
    );
  }
}

export default PrioritiesList;
