import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewAnnouncement extends Component {
  render() {
    const { announcement } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Announcement</Header>
              </div>
              <div>
                <Header as="h3">
                  Title
                  <Header.Subheader>{announcement.get('title')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>
                    {announcement.get('description')}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/announcements">
                <a>Back to Announcements</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewAnnouncement;
