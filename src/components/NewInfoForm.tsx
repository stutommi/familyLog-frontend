// Libraries
import * as React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Radio, Form, Grid, Segment, Header } from 'semantic-ui-react'
import * as moment from 'moment'
// Hooks
import { useField } from '../hooks/useField'
// Redux actions
import { thunkNewPerson } from '../thunks'
// Types

moment.updateLocale('en', {
  relativeTime: {
  }
})

interface NewInfoFormProps {
  thunkNewPerson: Function
}


const NewInfoForm = (props: NewInfoFormProps) => {
  const name = useField('text', 'Name', 'Name')
  const relation = useField('text', 'e.g Cousin...', 'Relation')
  const dateOfBirth = useField('date', 'Date of Birth', 'Date of Birth')
  const [relative, setRelative] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await props.thunkNewPerson(
        {
          name: name.attributes.value,
          birth: new Date(dateOfBirth.attributes.value),
          relation: relation.attributes.value,
          relative: relative,
        }
      )

      name.reset()
      dateOfBirth.reset()
      relation.reset()
      setRelative(false)
    } catch (error) {
      console.error(error.data.response)
    }
  }

  return (
    <Grid
      textAlign='center'
      verticalAlign='middle'
      style={{ height: '100%', background: 'lightpink' }}
    >
      <Grid.Column style={{ maxWidth: 250 }}>
        <Header>Add a person to log</Header>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Input {...name.attributes} />
            <Form.Input {...dateOfBirth.attributes} />
            <Form.Input {...relation.attributes} />
            <Form.Field>

              <Radio
                toggle
                onClick={() => setRelative(!relative)}
                checked={relative}
                label='related'
              />
            </Form.Field>
            <Form.Button>
              Add person
            </Form.Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default connect(null, { thunkNewPerson })(NewInfoForm)