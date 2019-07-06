// Hideous duplicate of DislikesSegment.. 

// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Segment, Input, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Components
import PersonInfoUnit from './PersonInfoUnit'
// Hooks
import { useField } from '../hooks/useField'
// Redux Actions
import { thunkEditPerson } from '../thunks'
// Types
import { Person } from '../store/logs/types'

interface LikesSegmentProps {
  person: Person,
  thunkEditPerson: Function
}

const LikesSegment = ({ person, thunkEditPerson }: LikesSegmentProps) => {
  const like = useField('text', '', '')
  const [showInput, setShowInput] = useState(false)

  // Add like
  const handleAddlike = (): void => {
    const updatedLikes: string[] = [...person.likes, like.attributes.value]

    const updatedPerson: Person = {
      ...person,
      likes: updatedLikes
    }

    thunkEditPerson(person.id, updatedPerson)
    setShowInput(false)
    like.reset()
  }

  return (
    <Segment
      textAlign='center'
      stacked
      inverted
      secondary
      color='green'>
      <h3>Likes</h3>

            {person.likes === undefined
        ? <p>No info</p>
        :
        <Segment.Group>
          {person.likes.map(like =>
            <PersonInfoUnit person={person} key={like} like={like} />
          )}
        </Segment.Group>
      }

      {showInput
        ?
        <Segment>
          <Input action {...like.attributes}>
            <input />
            <Button
              icon='plus'
              onClick={handleAddlike} />
          </Input>
        </Segment>
        :
        <Segment onClick={() => setShowInput(!showInput)} >
          <Icon name='plus' />
        </Segment>}
    </Segment>
  )
}


export default connect(null, { thunkEditPerson })(LikesSegment)