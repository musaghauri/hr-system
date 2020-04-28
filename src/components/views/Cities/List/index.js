import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class CitiesList extends Component {
  render() {
    const { headings, cities } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Cities</Header>
        <Link href="/cities/new">
          <Button
            content="Add City"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={cities} name="city" />
      </Container>
    );
  }
}

export default CitiesList;
