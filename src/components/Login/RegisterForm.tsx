// Libraries
import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form, Segment } from 'semantic-ui-react'
// Custom hooks
import { useField } from '../../hooks/useField'
// Components
import RegSuccessModal from './RegSuccessModal'

interface RegisterFormProps {
  setNotification: Function
  setLoginVisible: Function
}

const RegisterForm = ({ setNotification, setLoginVisible }: RegisterFormProps) => {
  const [showModal, setShowModal] = useState(false)
  const username = useField('text', 'Username', '')
  const email = useField('email', 'Email', '')
  const password = useField('password', 'Password', '')

  const handleRegister = async () => {
    try {

      const registerInformation = {
        password: password.attributes.value,
        email: email.attributes.value,
        username: username.attributes.value
      }

      const response = await axios.post(`/api/register`, registerInformation)
      console.log('response', response)

      setShowModal(true)
      setNotification('Register succesful')

      username.reset()
      email.reset()
      password.reset()
    } catch (error) {
      console.log(error.response.data)
      setNotification(error.response.data.error)
    }
  }

  return (
    <>
      <RegSuccessModal
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Form
        size='large'
        onSubmit={handleRegister}
        autoComplete='new-password'>

        <Segment stacked raised>
          <Form.Input
            {...username.attributes}
            fluid
            icon='user'
            iconPosition='left'
            autoComplete='new-password'
          />
          <Form.Input
            {...email.attributes}
            fluid
            icon='at'
            iconPosition='left'
            autoComplete='new-email'
          />
          <Form.Input
            {...password.attributes}
            fluid
            icon='lock'
            iconPosition='left'
            autoComplete='new-password'
          />

          <Button color='brown' size='large' type='submit'>
            Register
        </Button>
        </Segment>
      </Form>
    </>
  )
}

export default RegisterForm