// Libraries
import * as React from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react'
import * as moment from 'moment'
// Hooks
import { useField } from '../hooks/useField'

moment.updateLocale('en', {
  relativeTime: {

  }
})

const NewInfoForm = () => {
  const name = useField('text', 'Name', 'Name')
  const relation = useField('text', 'e.g Cousin...', 'Relation')
  const dateOfBirth = useField('date', 'Date of Birth', 'Date of Birth')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    name.reset()
    dateOfBirth.reset()
    relation.reset()
  }

  return (
    <Grid
      textAlign='center'
      verticalAlign='middle'
      style={{ height: '100%', background: 'lightpink' }}
    >
      <Grid.Column style={{ maxWidth: 250 }}>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Input {...name.attributes} />
            <Form.Input {...dateOfBirth.attributes} />
            <Form.Input {...relation.attributes} />
            <Form.Button>
              Add person
            </Form.Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default NewInfoForm