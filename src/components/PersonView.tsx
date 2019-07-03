// Libraries
import * as React from 'react'
import * as moment from 'moment'
import { Grid, Segment, Header, Icon, Table, Button } from 'semantic-ui-react'
import { Redirect, withRouter } from 'react-router'
import { connect } from 'react-redux'
// Types
import { Person } from '../store/logs/types'
// Components
import PersonInfoTableRow from './PersonInfoTableRow'
import DislikesSegment from './DislikesSegment'
import LikesSegment from './LikesSegment'
// Redux actions
import { thunkDeletePerson } from '../thunks'


interface PersonViewProps {
  person: Person,
  thunkDeletePerson: typeof thunkDeletePerson
}

const PersonView = ({ person, thunkDeletePerson }: PersonViewProps) => {

  const handleDelete = () => {
    const confirmation: boolean = window.confirm('Are you sure?')

    if (!confirmation) {
      return
    }

    thunkDeletePerson(person.id)
  }

  if (person === undefined) {
    return <Redirect to='/logs' />
  }

  return (
    <Grid
      stackable
      centered
      textAlign='center'
      style={{
        margin: 0,
        minHeight: '100%',
        background: 'LightPink',
        color: 'white'
      }}
    >
      <Grid.Row >
        <Grid.Column textAlign='center'>
          <Header
            style={{ color: 'white' }}
            as='h1'>{person.name}
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Table unstackable>
            <Table.Body>
              <PersonInfoTableRow
                label='Age'
                data={moment().diff(person.birth, "year")}
              />
              <PersonInfoTableRow
                label='Birth'
                data={moment(person.birth).format('DD.MM.YYYY')}
              />
              <PersonInfoTableRow
                label='Relation'
                data={person.relation}
              />
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column >

          <LikesSegment
            person={person} />
        </Grid.Column>

        <Grid.Column>

          <DislikesSegment
            person={person}
          />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column textAlign='center'>
          <Button negative onClick={handleDelete}>
            Delete Person
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

// @ts-ignore
export default withRouter(connect(null, { thunkDeletePerson })(PersonView))