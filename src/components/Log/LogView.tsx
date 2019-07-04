// Libraries
import * as _ from 'lodash'
import * as React from 'react'
import * as moment from 'moment'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid, Table, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// Types
import { LogState, Person } from '../../store/logs/types'
import { AppState } from '../../store'
// Components
import AddPersonsNotification from './AddPersonsNotification'

interface LogViewProps {
  log: LogState
}

const LogView = ({ log }: LogViewProps) => {
  const [data, setData] = useState(undefined)
  const [direction, setDirection] = useState(null)
  const [column, setColumn] = useState(null)

  useEffect(() => {
    if (log.persons === null) {
      setData(undefined)
    } else if (log.persons.length > 0) {
      setData(log.persons)
    } else {
      setData(null)
    }
  }, [log])

  const handleSort = (clickedColumn: string) => () => {

    if (column !== clickedColumn) {
      setColumn(clickedColumn)
      setDirection('ascending')

      clickedColumn === 'age'
        ?
        setData(data.sort((a: Person, b: Person) =>
          moment(a.birth).unix() - moment(b.birth).unix()))
        : setData(_.sortBy(data, [clickedColumn]))


      return
    }

    setData(data.reverse())
    setDirection(direction === 'ascending' ? 'descending' : 'ascending')
  }

  if (data === null) {
    console.log('data', data)
    // @ts-ignore
    return <AddPersonsNotification />
  }

  if (data === undefined) {
    return <Loader />
  }

  return (
    <Grid
      style={{ background: 'violet', height: '100%' }}>
      <Grid.Column >
        <Table unstackable sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={handleSort('name')}
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'age' ? direction : null}
                onClick={handleSort('age')}
              >
                Age
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
                  <Table.Cell>
                    <Link to={`/logs/${person.id}`}>
                      {person.name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{moment().diff(person.birth, 'years')} years</Table.Cell>
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