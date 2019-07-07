// Libraries
import * as React from 'react'
import { Table } from 'semantic-ui-react'

interface PersonInfoTableRowProps {
  label: string,
  data: string | number
}

const PersonInfoTableRow = (props: PersonInfoTableRowProps) => (
  <Table.Row>
    <Table.Cell>
      {props.label}
    </Table.Cell>
    <Table.Cell>
      {props.data}
    </Table.Cell>
  </Table.Row>
)

export default PersonInfoTableRow
