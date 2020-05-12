import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

class Experience extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <Card.Group>
          {info.toArray().map((item, itemI) => (
            <Card key={`experience_${itemI}`}>
              <Card.Content>
                <Card.Header>{item.get('organization')}</Card.Header>
                <Card.Meta>{item.get('designation')}</Card.Meta>
                <Card.Description>
                  <div>
                    <strong>Leaving Reason: </strong>
                    <span>{item.get('leavingReason')}</span>
                  </div>
                  <div>
                    <strong>Salary: </strong>
                    <span>{item.get('salary')}</span>
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

export default Experience;
