// Libraries
import * as React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
// Custom hooks
import { useField } from '../../hooks/useField'
// Types
import { User } from '../../store/user/types'
// Redux actions
import { thunkLogin } from '../../thunks'

interface LoginFormProps {
  setNotification: (text: string) => void,
  thunkLogin: (password: string, email: string) => User,
  history: any
}

const LoginForm = ({ setNotification, thunkLogin, history }: LoginFormProps) => {
  const email = useField('text', 'Email', '')
  const password = useField('password', 'Password', '')

  const handleLogin = async () => {
    try {
      const user = await thunkLogin(password.attributes.value, email.attributes.value)

      window.localStorage.setItem('familylog-user-token', user.token)
      window.localStorage.setItem('familylog-user-username', user.username)
      window.localStorage.setItem('familylog-user-allowEmailNotifications', `${user.allowEmailNotifications}`)

      history.push('/logs')
    } catch (error) {
      setNotification(error.response.data)
    }
  }

  return (
    <Form size='large' onSubmit={handleLogin}>
      <Segment stacked raised>
        <Form.Input
          {...email.attributes}
          fluid
          icon='at'
          iconPosition='left'
          autoComplete='current-email'
        />
        <Form.Input
          {...password.attributes}
          fluid
          icon='lock'
          iconPosition='left'
          autoComplete='current-password'
        />

        <Button color='brown' size='large' type='submit'>
          Log in
        </Button>
      </Segment>
    </Form>
  )
}

// @ts-ignore
export default withRouter(connect(null, { thunkLogin })(LoginForm))
