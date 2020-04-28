import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class Wishlist extends Component {
  render() {
    const { headings, wishlist } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Wishlist</Header>
        <Link href="/wishlist/new">
          <Button
            content="Add Wish"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={wishlist}
          name="wish"
        />
      </Container>
    );
  }
}

export default Wishlist;
