import React, { Component } from 'react';
import { Header, Grid, Segment, Button } from 'semantic-ui-react';
import Link from 'next/link';

class ViewWish extends Component {
  render() {
    const { wish } = this.props;
    return (
      <Grid columns={4} centered style={{ marginTop: '200px' }}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Segment>
              <div>
                <Header as="h1">Wish</Header>
              </div>
              <div>
                <Header as="h3">
                  Name
                  <Header.Subheader>{wish.get('name')}</Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Description
                  <Header.Subheader>
                    {wish.get('description')}
                  </Header.Subheader>
                </Header>
              </div>
              <div>
                <Header as="h3">
                  Priority
                  <Header.Subheader>
                  {wish.getIn(['priority', 'name'])}
                  </Header.Subheader>
                </Header>
              </div>
              <Link href="/wishlist">
                <a>Back to Wishlist</a>
              </Link>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ViewWish;
