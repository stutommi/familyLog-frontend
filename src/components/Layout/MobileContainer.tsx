// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Responsive, Sidebar, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// Redux actions
import { logout } from '../../store/user/actions'
import { clearLog } from '../../store/logs/actions'
// Types
import { AppState } from '../../store'
import { LogState } from '../../store/logs/types'
// Components
import MenuItemsMobile from './MenuItemsMobile'

interface MobileContainerProps {
  children: [JSX.Element] | JSX.Element
  logout: typeof logout
  page: string
  location: typeof location
  history: any
  log: LogState
  clearLog: typeof clearLog
}

const MobileContainer = (props: MobileContainerProps) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleLogout = () => {
    window.localStorage.clear()
    props.history.push('/login')
    props.logout()
    props.clearLog()
  }

  // Show person name, if in PersonView component
  const showHeader = () => {
    const location = props.location.pathname

    // Url location is in personview if it's longer than 10
    if (props.location.pathname.length > 10) {
      const person = props.log.persons
        .find(p => p.id === location.substring(6))

      if (!person) {
        return null
      }

      return person.name.split(' ')[0]
    }

    return location.slice(1)
  }

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

          <MenuItemsMobile setShowSidebar={setShowSidebar} />

        </Sidebar>

        <Sidebar.Pusher style={{ height: '100vh' }} dimmed={showSidebar}>

          <Menu
            widths={3}
            inverted
            pointing
            color='blue'
            size='large'
            style={{ height: '50px', marginBottom: 0, borderRadius: 0 }}
          >
            <Menu.Item onClick={() => setShowSidebar(true)} style={{ alignSelf: 'center' }}>
              <Icon data-cy='sidebar-button' name='sidebar' />
            </Menu.Item>

            <Menu.Item header={true}>

              {showHeader()}
            </Menu.Item>

            <Menu.Item position='right' onClick={handleLogout} style={{ alignSelf: 'center' }}>
              <Icon name='log out' />
            </Menu.Item>
          </Menu>

          <div
            style={{
              height: 'calc(100vh - 50px)',
              overflowY: 'scroll',
              overflowX: 'hidden'
            }}>
            {props.children}
          </div>

        </Sidebar.Pusher>
      </Responsive>
    </>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    log: state.log
  }
}

// @ts-ignore
export default withRouter(connect(mapStateToProps, { logout, clearLog })(MobileContainer))
