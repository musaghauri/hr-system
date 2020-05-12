import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';
import { formatDate } from '@utils/date';

class Duty extends Component {
  render() {
    const { info } = this.props;
    console.log({ info });
    return (
      <>
        <Card.Group>
          {info.toArray().map((item, itemI) => (
            <Card key={`duty_${itemI}`}>
              <Card.Content>
                <Card.Header>{item.get('job')}</Card.Header>
                <Card.Meta>{item.get('frequency')}</Card.Meta>
                <Card.Description>
                  <div>
                    <strong>Effective From: </strong>
                    <span>{formatDate(item.get('effectiveFrom'))}</span>
                  </div>
                  <div>
                    <strong>Enhanced Till: </strong>
                    <span>{formatDate(item.get('enhancedTill'))}</span>
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

export default Duty;
