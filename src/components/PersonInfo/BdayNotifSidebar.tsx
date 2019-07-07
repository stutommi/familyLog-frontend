// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Sidebar, Grid, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
// Types
import { Person } from '../../store/logs/types'
import { thunkEditPerson } from '../../thunks';

interface BdayNotifSidebarProps {
  children: JSX.Element | [JSX.Element]
  person: Person
  thunkEditPerson: (id: string, person: Person) => void
}

const BdayNotifSidebar = (props: BdayNotifSidebarProps) => {
  const [optionVisible, setOptionVisible] = useState(false)

  const handleNotifySetting = () => {
    const updatedBirth = {
      date: props.person.birth.date,
      notifyByEmail: !props.person.birth.notifyByEmail
    }

    const updatedPerson: Person = { ...props.person, birth: updatedBirth }

    props.thunkEditPerson(props.person.id, updatedPerson)
  }

  return (
    <>
      <Sidebar.Pushable style={{ overflow: 'hidden' }}>
        <Sidebar
          as={Grid}
          direction='bottom'
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setOptionVisible(false)}
          visible={optionVisible}
          width='thin'>

          <Grid.Row textAlign='center' columns='2'>
            <Grid.Column onClick={() => setOptionVisible(false)} color='blue'>
              Cancel
          </Grid.Column>
            <Grid.Column
              onClick={handleNotifySetting}
              color={props.person.birth.notifyByEmail ? 'green' : 'yellow'}>
              {
                <>
                  <Icon name='at' />
                  :
                <Icon name={props.person.birth.notifyByEmail ? 'thumbs up' : 'thumbs down'} />
                </>
              }
            </Grid.Column>
          </Grid.Row>

        </Sidebar>

        <Sidebar.Pusher
          onClick={() => setOptionVisible(true)}
        >

          {props.children}

        </Sidebar.Pusher>

      </Sidebar.Pushable >
    </>
  )
}

export default connect(null, { thunkEditPerson })(BdayNotifSidebar)
