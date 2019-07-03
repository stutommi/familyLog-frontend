// Libraries
import * as React from 'react'
import { useState } from 'react'
import { Responsive, Sidebar, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// Redux actions
import { setPage } from '../../store/system/actions'
import { logout } from '../../store/user/actions'
// Types
import { AppState } from '../../store'
import { LogState } from '../../store/logs/types'

interface MobileContainerProps {
  children: [JSX.Element] | JSX.Element
  logout: typeof logout,
  setPage: typeof setPage,
  page: string
  location: typeof location
  log: LogState
}

const MobileContainer = (props: MobileContainerProps) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleSetPage = (page: string) => () => {
    props.setPage(page)
    setShowSidebar(false)
  }

  const handleLogout = () => {
    window.localStorage.clear()
    props.logout()
  }

  // Show person name, if in PersonView component
  const showHeader = () => {
    const location = props.location.pathname

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

          <Menu.Item
            as={Link} to='/logs'
            onClick={handleSetPage('Logs')}>
            <Icon name='list alternate' />
            Logs
          </Menu.Item>

          <Menu.Item
            as={Link} to='/new-info'
            onClick={handleSetPage('New Person')}>
            <Icon name='add user' />
            Add to log
          </Menu.Item>

          <Menu.Item
            as={Link} to='/about'
            onClick={handleSetPage('About')}>
            <Icon name='question' />
            About
            </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher style={{ height: '100vh' }} dimmed={showSidebar}>

          <Menu widths={3} inverted pointing color='blue' size='large' style={{ height: '50px', marginBottom: 0, borderRadius: 0 }}>
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
    page: state.system.page,
    log: state.log
  }
}

// @ts-ignore
export default withRouter(connect(mapStateToProps, { setPage, logout })(MobileContainer))