import React, { Component } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

class Dependent extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <List ordered>
              {info.map((item, itemI) => (
                <List.Item key={`dependent_${itemI}`}>
                  <div>
                    <Header as="h3">
                      Name
                      <Header.Subheader>
                        {item && item.get('name')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Gender
                      <Header.Subheader>
                        {item && item.get('gender')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Relation
                      <Header.Subheader>
                        {item && item.get('relation')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Contact
                      <Header.Subheader>
                        {item && item.get('contact')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Date of Birth
                      <Header.Subheader>
                        {item && item.get('dateOfBirth')}
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

export default Dependent;
