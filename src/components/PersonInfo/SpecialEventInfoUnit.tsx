// Libraries
import * as React from 'react'
import * as moment from 'moment'
import { useState } from 'react'
import { Segment, Sidebar, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Redux actions
import { thunkEditPerson } from '../../thunks'
// Types
import { Person, SpecialEvent } from '../../store/logs/types'

interface SpecialEventInfoUnitProps {
  specialEvent: SpecialEvent
  person: Person,
  thunkEditPerson: (id: string, updatedPerson: Person) => void
}

const SpecialEventInfoUnit = (
  { specialEvent, person, thunkEditPerson }: SpecialEventInfoUnitProps) => {
  const [deleteOptionVisible, setDeleteOptionVisible] = useState(false)

  // Delete single special event
  const handleDelete = () => {

    const updatedInfoArray: SpecialEvent[] =
      person.specialEvents
        .filter((e: SpecialEvent) => e.type !== specialEvent.type)

    const updatedPerson: Person = { ...person }

    updatedPerson.specialEvents = updatedInfoArray

    thunkEditPerson(person.id, updatedPerson)
  }

  const handleNotifySetting = () => {
    const updatedEvent: SpecialEvent = {
      ...specialEvent,
      notifyByEmail: !specialEvent.notifyByEmail
    }

    const updatedSpecialEventsArray: SpecialEvent[] =
      person.specialEvents
        .map((e: SpecialEvent) => e.type !== specialEvent.type ? e : updatedEvent)

    const updatedPerson: Person = { ...person, specialEvents: updatedSpecialEventsArray }

    thunkEditPerson(person.id, updatedPerson)
  }

  return (

    <Sidebar.Pushable style={{ overflow: 'hidden' }}>
      <Sidebar
        as={Grid}
        direction='bottom'
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setDeleteOptionVisible(false)}
        visible={deleteOptionVisible}
        width='thin'>

        <Grid.Row columns='3'>
          <Grid.Column onClick={() => setDeleteOptionVisible(false)} color='blue'>
            Cancel
          </Grid.Column>
          <Grid.Column onClick={handleDelete} color='red'>
            Delete
          </Grid.Column>
          <Grid.Column
            onClick={handleNotifySetting}
            color={specialEvent.notifyByEmail ? 'green' : 'yellow'}>
            {
              <>
                <Icon name='at' />
                :
                <Icon name={specialEvent.notifyByEmail ? 'thumbs up' : 'thumbs down'} />
              </>
            }
          </Grid.Column>
        </Grid.Row>

      </Sidebar>

      <Sidebar.Pusher>
        <Segment
          textAlign='center'
          onClick={() => setDeleteOptionVisible(true)}
          style={{ overflow: 'hidden' }}
        >

          <Grid>
            <Grid.Row columns='2'>
              <Grid.Column>
                {specialEvent.type}
              </Grid.Column>
              <Grid.Column>
                {moment(specialEvent.date).format('D.MM.YYYY')}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

      </Sidebar.Pusher>

    </Sidebar.Pushable >
  )
}

export default connect(null, { thunkEditPerson })(SpecialEventInfoUnit)
