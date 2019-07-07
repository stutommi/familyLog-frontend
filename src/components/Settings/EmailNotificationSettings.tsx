// Libraries
import * as React from 'react'
import { Segment, Header, Radio, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Types
import { User } from '../../store/user/types'
import { AppState } from '../../store'
// Redux actions
import { thunkEditUserEmailNotifications } from '../../thunks'

interface EmailNotificationSettingsProps {
  thunkEditUserEmailNotifications: () => void
  user: User
}

const EmailNotificationSettings = (props: EmailNotificationSettingsProps) => {

  const handleEmailNotification = () => {
    props.thunkEditUserEmailNotifications()
    localStorage.setItem('familylog-user-allowEmailNotifications', `${!props.user.allowEmailNotifications}`)
  }

  return (
    <Segment>
      <Header>Email notifications</Header>
      <Segment
        secondary
        color={props.user.allowEmailNotifications ? 'green' : 'red'}
      >
        <p>Allow email notifications</p>
        <Radio
          label={props.user.allowEmailNotifications ? 'On' : 'Off'}
          toggle
          checked={props.user.allowEmailNotifications}
          onClick={handleEmailNotification}
        />
      </Segment>
    </Segment>
  )
}

const mapToProps = ((state: AppState) => {
  return {
    user: state.user
  }
})

export default connect(mapToProps, { thunkEditUserEmailNotifications })(EmailNotificationSettings)
