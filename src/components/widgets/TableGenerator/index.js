import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class TableGenerator extends Component {
  render() {
    const { headings, rows, name } = this.props;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {headings.map((heading, hI) => (
              <Table.HeaderCell key={`heading_${hI}`}>
                {heading.get('label')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={`row_${rowIndex}`}>
              {row.map((column, i) =>
                column.isFunctional ? (
                  <Table.Cell
                    onClick={column.handleChange}
                    key={`row_${rowIndex}_cell_${i}`}
                  >
                    {column.value}
                  </Table.Cell>
                ) : (
                  <Table.Cell
                    key={`row_${rowIndex}_cell_${i}`}
                    error={column.error}
                  >
                    {column.value}
                  </Table.Cell>
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
