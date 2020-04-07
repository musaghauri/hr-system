import React, { Component } from "react";
import { Icon, Table, Segment, Button } from "semantic-ui-react";
import { CenteredHeading } from "@components/views/Auth/custom-components";
import Link from "next/link";

class EmployeesList extends Component {
  render() {
    return (
      <Segment style={{ marginTop: "80px", marginLeft: "150px" }}>
        <CenteredHeading>Employees List</CenteredHeading>
        <Link href="employees/new">
          <Button
            content="Add New"
            floated="right"
            primary
            style={{ marginBottom: "5px" }}
          />
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Detail</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Active</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
              <Table.HeaderCell>Block</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>employee1</Table.Cell>
              <Table.Cell>this is detail</Table.Cell>
              <Table.Cell>Development</Table.Cell>
              <Table.Cell>True</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>
                <Link href="/employees/[employeeId]" as={`/employees/1`}>
                  <a>Edit</a>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Icon name="ban" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>ID</Table.Cell>
              <Table.Cell>employee2</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Second</Table.Cell>
              <Table.Cell>True</Table.Cell>
              <Table.Cell>Permanent</Table.Cell>
              <Table.Cell>
                <Link href="/employees/[employeeId]" as={`/employees/2`}>
                  <a>Edit</a>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Icon name="ban" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default EmployeesList;
