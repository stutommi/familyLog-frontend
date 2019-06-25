// Libraries
import * as _ from 'lodash'
import * as React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Grid, Table } from 'semantic-ui-react'
// Components
import PersonInfo from './PersonInfo'

interface LogViewProps {
  logs: Array<object>
}

const LogView = (props: LogViewProps) => {
  const [direction, setDirection] = useState(null)
  const [column, setColumn] = useState(null)

  const handleSort = (clickedColumn: string) => () => {
// TÄSTÄ JATKUU
  }

  return (
    <Grid
      style={{ background: 'violet', height: '100%' }}>
      <Grid.Column style={{ maxWidth: 250 }}>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
              sorted={}
              onClick={handleSort}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>
                Age
              </Table.HeaderCell>
              <Table.HeaderCell>
                Relation
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(props.logs, (logs: any) => {
              <Table.Row key={logs.name}>
                <Table.Cell>{logs.name}</Table.Cell>
                <Table.Cell>{logs.age}</Table.Cell>
                <Table.Cell>{logs.relation}</Table.Cell>
              </Table.Row>
            })}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = (state: any) => {
  return {
    logs: state.logs
  }
}

export default connect(mapStateToProps, null)(LogView)