import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewDocument extends Component {
  render() {
    const { document } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Document</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{document.get('name')}</Header.Subheader>
                </Header>
              </div>
              <Link href="/documents">
                <a>Back to Documents</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewDocument;
