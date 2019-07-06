// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Segment, Input, Button, Icon, Sidebar, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Components
import PersonInfoUnit from './PersonInfoUnit'
// Hooks
import { useField } from '../hooks/useField'
// Redux Actions
import { thunkEditPerson } from '../thunks'
// Types
import { Person } from '../store/logs/types'

interface DislikesSegmentProps {
  person: Person,
  thunkEditPerson: Function
}

const DislikesSegment = ({ person, thunkEditPerson }: DislikesSegmentProps) => {
  const dislike = useField('text', '', '')
  const [showInput, setShowInput] = useState(false)

  // Add dislike
  const handleAddDislike = (): void => {
    const updatedDislikes: string[] = [...person.dislikes, dislike.attributes.value]
    console.log('updatedDislikes', updatedDislikes)
    const updatedPerson: Person = {
      ...person,
      dislikes: updatedDislikes
    }

    thunkEditPerson(person.id, updatedPerson)
    setShowInput(false)
    dislike.reset()
  }

  return (
    <Segment
      textAlign='center'
      stacked
      inverted
      secondary
      color='yellow'>
      <h3>Dislikes</h3>

            {person.dislikes === undefined
        ? <p>No info</p>
        :
        <Segment.Group>
          {person.dislikes.map(dislike =>
           <PersonInfoUnit person={person} key={dislike} dislike={dislike} />
          )}
        </Segment.Group>
      }

      {showInput
        ?
        <Segment>
          <Input action {...dislike.attributes}>
            <input />
            <Button
              icon='plus'
              onClick={handleAddDislike} />
          </Input>
        </Segment>
        :
        <Segment onClick={() => setShowInput(!showInput)} >
          <Icon name='plus' />
        </Segment>}
    </Segment>
  )
}


export default connect(null, { thunkEditPerson })(DislikesSegment)