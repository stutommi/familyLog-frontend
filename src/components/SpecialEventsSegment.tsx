// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Segment, Icon, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Components
import SpecialEventInfoUnit from './SpecialEventInfoUnit'
// Hooks
import { useField } from '../hooks/useField'
// Redux Actions
import { thunkEditPerson } from '../thunks'
// Types
import { Person, SpecialEvent } from '../store/logs/types'

interface SpecialEventsTable {
  person: Person,
  thunkEditPerson: Function
}

const SpecialEventsTable = ({ person, thunkEditPerson }: SpecialEventsTable) => {
  const specialEventType = useField('text', 'E.g Anniversary', '')
  const specialEventDate = useField('date', 'Date', '')
  const [showInput, setShowInput] = useState(false)

  // Add special event
  const handleSpecialEvent = (): void => {
    const newEvent = {
      date: specialEventDate.attributes.value,
      type: specialEventType.attributes.value,
      notifyByEmail: true
    }

    const updatedSpecialEvents: SpecialEvent[] = [...person.specialEvents, newEvent]

    const updatedPerson: Person = {
      ...person,
      specialEvents: updatedSpecialEvents
    }

    thunkEditPerson(person.id, updatedPerson)
    setShowInput(false)
    specialEventType.reset()
    specialEventDate.reset()
  }

  return (
    <Segment color='blue' inverted secondary textAlign='center'>
      <h3>Special events</h3>
      {
        person.specialEvents.length === 0
          ? <p>No special events</p>
          :
          <Segment.Group >
            {person.specialEvents.map(event =>
              <SpecialEventInfoUnit
              key={`${event.type}${event.date}`}
              person={person}
              specialEvent={event} />
            )}
          </Segment.Group>
      }

      {
        showInput
          ?
          <Form
            onSubmit={handleSpecialEvent}
          >
            <Form.Input
              {...specialEventType.attributes}
              action
              fluid
              required
              maxLength={30}
              label='Name of event'
            />
            <Form.Input
              action {...specialEventDate.attributes}
              fluid
              required
              label='Date of event'
            />
            <Form.Button
              content='Add event'
              type='submit' />
          </Form>
          :
          <Segment onClick={() => setShowInput(!showInput)} >
            <Icon name='plus' />
          </Segment>
      }
    </Segment>
  )
}


export default connect(null, { thunkEditPerson })(SpecialEventsTable)