import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class DocumentsList extends Component {
  render() {
    const { headings, documents } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Documents</Header>
        <Link href="/documents/new">
          <Button
            content="Add Document"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator headings={headings} rows={documents} name="document" />
      </Container>
    );
  }
}

export default DocumentsList;
