import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class AssetsList extends Component {
  render() {
    const { headings, assets } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Assets</Header>
        <Link href="/assets/new">
          <Button
            content="Add Asset"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={assets}
          name="asset"
        />
      </Container>
    );
  }
}

export default AssetsList;
