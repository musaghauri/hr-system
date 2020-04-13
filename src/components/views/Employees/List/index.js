import React, { Component } from "react";
import Link from "next/link";
import TableGenerator from "@components/widgets/TableGenerator";
import { CenteredHeading } from "@components/views/Auth/custom-components";
import { Segment, Button } from "semantic-ui-react";
import Router from "next/router";

class EmployeesList extends Component {
  render() {
    const { headings, employees } = this.props;
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
        <TableGenerator headings={headings} rows={employees} name="employee" />
      </Segment>
    );
  }
}

export default EmployeesList;
