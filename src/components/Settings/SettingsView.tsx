// Libraries
import * as React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
// Components
import EmailNotificationSettings from './EmailNotificationSettings'
import DeleteUserSettings from './DeleteUserSettings'

const SettingsView = () => {

  return (
    <Grid divided='vertically'>
      <Grid.Row>
        <Grid.Column>
          <EmailNotificationSettings />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <DeleteUserSettings />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default SettingsView
