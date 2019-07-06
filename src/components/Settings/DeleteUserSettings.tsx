// Libraries
import * as React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Redux actions
import { thunkDeleteUser } from '../../thunks'

interface DeleteUserSettingsProps {
  thunkDeleteUser: Function
}

const DeleteUserSettings = (props: DeleteUserSettingsProps) => {

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this account? All information will be deleted'
    )

    if (confirmation) {
      props.thunkDeleteUser()
      localStorage.clear()
    }
  }

  return (
    <Segment>
      <Header>Delete account</Header>
      <Segment textAlign='center' color='yellow'>
        <p>Deletes your user account</p>
        <Button
          onClick={handleDeleteAccount}
          color='red'>
          Delete
      </Button>
      </Segment>
    </Segment>
  )
}

export default connect(null, { thunkDeleteUser })(DeleteUserSettings)