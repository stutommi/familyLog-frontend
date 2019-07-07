// Libraries
import * as React from 'react'
import { Segment, Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

interface IAddPersonsNotification {
  history: any
}

const AddPersonsNotification = (props: IAddPersonsNotification) => {
  return (

    <Segment
      color='grey'
      inverted
      tertiary
      textAlign='center'
      style={{ height: '100%' }}
    >
      <h1 style={{ marginTop: '40%' }}>
        No logs yet
      </h1>
      <Icon name='meh' size='massive' />
      < br />
      <Button
        style={{ marginTop: 15 }}
        color='green'
        size='large'
        onClick={() => props.history.push('/new-info')}>
        Add person
      </Button>
    </Segment>

  )
}

export default withRouter(AddPersonsNotification)
