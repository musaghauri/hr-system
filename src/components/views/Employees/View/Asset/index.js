import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { formatDate } from '@utils/date';

class Asset extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <Card.Group>
          {info.toArray().map((item, itemI) => (
            <Card key={`asset_${itemI}`}>
              <Card.Content>
                <Card.Header>{item.getIn(['id', 'name'])}</Card.Header>
                <Card.Meta>{formatDate(item.get('issueDate'))}</Card.Meta>
                <Card.Description>
                  <p>Detail: {item.get('detail')}</p>
                  <div>
                    <strong>Status: </strong>
                    <span>
                      {item.get('status') ? (
                        <Icon name="check" color="green" />
                      ) : (
                        <Icon name="times" color="red" />
                      )}
                    </span>
                  </div>
                  <div>
                    <strong>Returnable Till: </strong>
                    <span>
                      {item.get('returnable') ? (
                        <Icon name="check" color="green" />
                      ) : (
                        <Icon name="times" color="red" />
                      )}
                    </span>
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

export default Asset;
