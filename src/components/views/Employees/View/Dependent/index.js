import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import { formatDate } from '@utils/date';

class Dependent extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <Card.Group>
          {info.toArray().map((item, itemI) => (
            <Card key={`dependant_${itemI}`}>
              <Card.Content>
                <Card.Header>{item.get('name')}</Card.Header>
                <Card.Meta>
                  {item.get('relation')} | {item.get('gender')}
                </Card.Meta>
                <Card.Description>
                  <div>
                    <strong>Contact: </strong>
                    <span>{formatDate(item.get('contact'))}</span>
                  </div>
                  <div>
                    <strong>Date of Birth: </strong>
                    <span>{formatDate(item.get('dateOfBirth'))}</span>
                  </div>
                </Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>

        <Link href="/employees">
          <a>Back to Employees</a>
        </Link>
      </>
    );
  }
}

export default Dependent;
