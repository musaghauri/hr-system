import React, { Component } from 'react';
import Link from 'next/link';
import TableGenerator from '@components/widgets/TableGenerator';
import { Container, Button, Header } from 'semantic-ui-react';

class ProjectsList extends Component {
  render() {
    const { headings, projects } = this.props;
    return (
      <Container style={{ margin: 20 }}>
        <Header as="h3">Projects</Header>
        <Link href="/projects/new">
          <Button
            content="Add Project"
            floated="left"
            primary
            style={{ marginBottom: '5px' }}
          />
        </Link>
        <TableGenerator
          headings={headings}
          rows={projects}
          name="project"
        />
      </Container>
    );
  }
}

export default ProjectsList;
