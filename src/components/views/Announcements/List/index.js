import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class AnnouncementsList extends Component {
  render() {
    const { headings, announcements } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Announcements</Header>
        <Link href="/announcements/new">
          <Button
            content="Add Announcement"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={announcements}
          name="announcement"
        />
      </Container>
    );
  }
}

export default AnnouncementsList;
