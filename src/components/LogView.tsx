// Libraries
import * as _ from 'lodash'
import * as React from 'react'
import * as moment from 'moment'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Table } from 'semantic-ui-react'

import { LogState } from '../store/logs/types'
import { AppState } from '../store'

interface LogViewProps {
  log: LogState
}

const LogView = ({ log }: LogViewProps) => {
  const [data, setData] = useState<any>(null)
  const [direction, setDirection] = useState(null)
  const [column, setColumn] = useState(null)

  useEffect(() => {
    if (log.persons) {
      setData(log.persons)
    }
  }, [log])

  const handleSort = (clickedColumn: string) => () => {

    if (column !== clickedColumn) {
      setColumn(clickedColumn)
      setData(_.sortBy(data, [clickedColumn]))
      setDirection('ascending')

      return
    }

    setData(data.reverse())
    setDirection(direction === 'ascending' ? 'descending' : 'ascending')
  }

  if (data === null ) {
    return null
  }

  return (
    <Grid
      style={{ background: 'violet', height: '100%' }}>
      <Grid.Column >
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={handleSort('name')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'birth' ? direction : null}
                onClick={handleSort('birth')}
              >
                Birth
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'relation' ? direction : null}
                onClick={handleSort('relation')}
              >
                Relation
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, (person: any) => {
              return (
                <Table.Row key={person.name}>
                  <Table.Cell>{person.name} ({moment().diff(person.birth, 'years')} y)</Table.Cell>
                  <Table.Cell>{moment(person.birth).format('DD.MM.YYYY')}</Table.Cell>
                  <Table.Cell>{person.relation}</Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    log: state.log
  }
}

export default connect(mapStateToProps, null)(LogView)