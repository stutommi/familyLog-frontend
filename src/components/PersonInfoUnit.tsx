// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Segment, Sidebar, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Redux actions
import { thunkEditPerson } from '../thunks'
// Types
import { Person } from '../store/logs/types'

interface PersonInfoUnitProps {
  like?: string
  dislike?: string,
  person: Person,
  thunkEditPerson: Function
}

const PersonInfoUnit = ({ dislike, person, thunkEditPerson, like }: PersonInfoUnitProps) => {
  const [deleteOptionVisible, setDeleteOptionVisible] = useState(false)

  // Delete single like or dislike
  const handleDelete = () => {
    let infoArray

    if (like === undefined) {
      infoArray = person.dislikes
    } else {
      infoArray = person.likes
    }

    const updatedInfoArray = infoArray.filter((d: string) => d !== dislike && d !== like)

    const updatedPerson: Person = { ...person }

    if (like === undefined) {
      updatedPerson.dislikes = updatedInfoArray
    } else {
      updatedPerson.likes = updatedInfoArray
    }

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

        <Grid.Row columns='2'>
          <Grid.Column onClick={() => setDeleteOptionVisible(false)} color='blue'>
            Cancel
          </Grid.Column>
          <Grid.Column onClick={handleDelete} color='red'>
            Delete
          </Grid.Column>
        </Grid.Row>

      </Sidebar>

      <Sidebar.Pusher>
        <Segment
          onClick={() => setDeleteOptionVisible(true)}
          style={{ overflow: 'hidden' }}>
          {dislike}
          {like}
        </Segment>
      </Sidebar.Pusher>

    </Sidebar.Pushable>
  )
}

export default connect(null, { thunkEditPerson })(PersonInfoUnit)
