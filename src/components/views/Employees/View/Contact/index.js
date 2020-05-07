import React, { Component } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

class Contact extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <List ordered>
              {info.map((item, itemI) => (
                <List.Item key={`contact_${itemI}`}>
                  <div>
                    <Header as="h3">
                      Title
                      <Header.Subheader>
                        {item && item.get('title')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Type
                      <Header.Subheader>
                        {item && item.get('type')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Detail
                      <Header.Subheader>
                        {item && item.get('detail')}
                      </Header.Subheader>
                    </Header>
                  </div>
                </List.Item>
              ))}
            </List>
            <Link href="/employees">
              <a>Back to Employees</a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Contact;
