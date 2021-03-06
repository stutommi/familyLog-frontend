// Libraries
import * as React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
// Components
import PopupLink from './PopupLink'

const headerStyle = {
  fontSize: 18
}

const AboutView = () => {
  return (
    <Container textAlign='left' style={{ fontSize: 16, paddingBottom: 15 }}>
      <Header textAlign='center' as='h1' style={{ paddingTop: 25, margin: 0 }}>
        About FamilyLog
      </Header>

      <h3 style={headerStyle}>Aim:</h3>
      <p>Create a small app that stores and remembers the ages and preferences
        of people close to you. It notifys you one week before somebody's birthday or other special event is coming.
      </p>

      <h3 style={headerStyle}>Features:</h3>
      <ul>
        <li>Possibility to keep log of relatives ages and birthdays in the same place</li>
        <li>Add things they like!</li>
        <li>Add things they don't like!</li>
      </ul>

      <h3 style={headerStyle}>Email notifications:</h3>
      <p>Email notifications can be switched off from the settings menu or individually from persons private view in
        logs. To switch emails notifications on and off individually for birthdays, click at the "birth" information
        row in persons private view. You can do the same for special event notifications by clicking the event inside
        persons private view.
      </p>

      <Segment style={{ background: 'lightgreen' }}>
        <p>
          Any questions, tips, feedback or bug reports are much appreciated! Just
            post them in tommi.teetee@hotmail.com <span role='img' aria-label='happy smiley'>🙂</span>
        </p>
      </Segment>

      <h4 style={headerStyle}>Made by:</h4>
      <PopupLink
        name={'Tommi Tampio'}
        linkedInUrl={'https://www.linkedin.com/in/tommi-tampio-41b2b7113/'}
        githubUrl={'https://github.com/stutommi'}
        email={'tommi.teetee@hotmail.com'}
      />
    </Container>

  )
}

export default AboutView
