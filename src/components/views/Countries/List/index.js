import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class CountriesList extends Component {
  render() {
    const { headings, countries } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Countries</Header>
        <Link href="/countries/new">
          <Button
            content="Add Country"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={countries} name="country" />
      </Container>
    );
  }
}

export default CountriesList;
