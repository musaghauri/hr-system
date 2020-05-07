import React, { Component } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

class Duty extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <List ordered>
              {info.map((item, itemI) => (
                <List.Item key={`duty_${itemI}`}>
                  <div>
                    <Header as="h3">
                      Job
                      <Header.Subheader>
                        {item && item.get('job')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Frequency
                      <Header.Subheader>
                        {item && item.get('frequency')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Effective From
                      <Header.Subheader>
                        {item && item.get('effectiveFrom')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Enhanced Till
                      <Header.Subheader>
                        {item && item.get('enhancedTill')}
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

export default Duty;
