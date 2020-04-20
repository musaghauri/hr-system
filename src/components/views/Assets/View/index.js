import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewAsset extends Component {
  render() {
    const { asset } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Asset</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{asset.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>
                    {asset.get('description')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Cost
                  <Header.Subheader>
                    {asset.get('cost')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Purchased At
                  <Header.Subheader>
                    {asset.get('purchasedAt')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Used By
                  <Header.Subheader>
                    {asset.get('usedBy')}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/assets">
                <a>Back to Assets</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewAsset;
