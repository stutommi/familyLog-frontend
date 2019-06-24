// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Responsive, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export interface DesktopContainerProps {
  children: [JSX.Element] | JSX.Element,
  logOut: Function,
}

const DesktopContainer = (props: DesktopContainerProps) => {

  return (
    <>
      <Responsive
        style={{ height: '100vh' }}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Menu
          style={{ height: 71 }}
          inverted
          icon='labeled'
          color='blue'
          fixed='top'
        >
          <Menu.Item
            header
            style={{ fontSize: 20, alignSelf: 'center' }}>
            FamilyLog
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Icon name='add user' />
              Add to log
            </Menu.Item>

            <Menu.Item>
              <Icon name='question' />
              <Link to='/about'>
                Add to log
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Icon name='log out' />
              Log out
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div style={{ height: 71 }} />
        <div style={{ height: 'calc(100vh - 71px)' }}>
          {props.children}
        </div>

      </Responsive>
    </>
  )
}

export default DesktopContainer