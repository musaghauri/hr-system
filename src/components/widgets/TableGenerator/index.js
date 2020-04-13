import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableGenerator extends Component {
  render() {
    const { headings, rows, name } = this.props;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {headings.map(heading => (
              <Table.HeaderCell>{heading.get('label')}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={`row_${rowIndex}`}>
              {row.map((column, i) =>
                column.isFunctional ? (
                  <Table.Cell onClick={column.handleChange}>
                    {column.value}
                  </Table.Cell>
                ) : (
                  <Table.Cell>{column.value}</Table.Cell>
                )
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default TableGenerator;
