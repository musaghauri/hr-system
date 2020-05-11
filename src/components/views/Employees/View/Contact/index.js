import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

class Contact extends Component {
  render() {
    const { info } = this.props;
    console.log({ info });
    const contacts = info.toArray().map(item => ({
      header: item.get('title'),
      description: item.get('description'),
      meta: item.get('type'),
    }));

    return (
      <>
        <Card.Group items={contacts} />
        <Link href="/employees">
          <a>Back to Employees</a>
        </Link>
      </>
    );
  }
}

export default Contact;
