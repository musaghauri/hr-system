import React, { Component } from 'react';
import { Header, Grid, List } from 'semantic-ui-react';
import Link from 'next/link';

class Academic extends Component {
  render() {
    const { info } = this.props;
    return (
      <Grid columns={4}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <List ordered>
              {info.map((item, itemI) => (
                <List.Item key={`academic_${itemI}`}>
                  <div>
                    <Header as="h3">
                      Degree Name
                      <Header.Subheader>
                        {item && item.get('degreeName')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Board
                      <Header.Subheader>
                        {item && item.get('board')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      University
                      <Header.Subheader>
                        {item && item.get('university')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Marks
                      <Header.Subheader>
                        {item && item.get('marks')}
                      </Header.Subheader>
                    </Header>
                  </div>
                  <div>
                    <Header as="h3">
                      Grade
                      <Header.Subheader>
                        {item && item.get('grade')}
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

export default Academic;
