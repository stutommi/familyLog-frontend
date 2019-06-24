// Libraries
import * as React from 'react'
import { useState } from 'react'

import { Responsive, Sidebar, Menu, Icon } from 'semantic-ui-react'

interface MobileContainerProps {
  children: [JSX.Element] | JSX.Element
  logOut: Function,
}

const MobileContainer = (props: MobileContainerProps) => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Responsive
        maxWidth={Responsive.onlyMobile.maxWidth}
        as={Sidebar.Pushable}
        style={{ height: '100vh' }}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={() => setShowSidebar(false)}
          vertical
          visible={showSidebar}
          icon='labeled'
          width='thin'
        >

          <Menu.Item>
            <Icon name='add user' />
            Add to log
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher style={{ height: '100%' }} dimmed={showSidebar}>

          <Menu widths={3} inverted pointing color='blue' size='large' style={{ height: '50px', marginBottom: 0, borderRadius: 0 }}>
            <Menu.Item onClick={() => setShowSidebar(true)} style={{ alignSelf: 'center' }}>
              <Icon data-cy='sidebar-button' name='sidebar' />
            </Menu.Item>

            <Menu.Item header={true}>
              Hei
            </Menu.Item>

            <Menu.Item position='right' onClick={() => props.logOut()} style={{ alignSelf: 'center' }}>
              <Icon name='log out' />
            </Menu.Item>
          </Menu>

          <div
            style={{
              height: 'calc(100vh - 50px)'
            }}>
            {props.children}
          </div>

        </Sidebar.Pusher>
      </Responsive>
    </>
  )
}

export default MobileContainer