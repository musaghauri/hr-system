import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

class Academic extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <Card.Group>
          {info.toArray().map((item, itemI) => (
            <Card key={`academic_${itemI}`}>
              <Card.Content>
                <Card.Header>{item.get('degreeName')}</Card.Header>
                <Card.Meta>{item.get('board')}</Card.Meta>
                <Card.Description>
                  <div>
                    <strong>Marks: </strong>
                    <span>{item.get('marks')}</span>
                  </div>
                  <div>
                    <strong>Grade: </strong>
                    <span>{item.get('grade')}</span>
                  </div>
                  <div>
                    <strong>University: </strong>
                    <span>{item.get('university')}</span>
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

export default Academic;
