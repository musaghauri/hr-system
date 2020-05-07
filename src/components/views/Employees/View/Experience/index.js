import React, { Component } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

class Experience extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <List ordered>
              {info.map((item, itemI) => (
                <List.Item key={`experience_${itemI}`}>
                  <div>
                    <Header as="h3">
                      Organization
                      <Header.Subheader>
                        {item && item.get('organization')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Designation
                      <Header.Subheader>
                        {item && item.get('designation')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Leaving Reason
                      <Header.Subheader>
                        {item && item.get('leavingReason')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Salary
                      <Header.Subheader>
                        {item && item.get('salary')}
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

export default Experience;
