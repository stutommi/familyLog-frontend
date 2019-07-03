// Libraries
import * as React from 'react'
import { connect } from 'react-redux'
import { Responsive, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// Types
import { AppState } from '../../store'
// Redux actions
import { setPage } from '../../store/system/actions'
import { logout } from '../../store/user/actions'

export interface DesktopContainerProps {
  children: [JSX.Element] | JSX.Element,
  logout: typeof logout
  setPage: typeof setPage
}

const DesktopContainer = (props: DesktopContainerProps) => {

  const handleSetPage = (page: string) => () => {
    props.setPage(page)
  }

  const handleLogout = () => {
    window.localStorage.clear()
    props.logout()
  }

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

          <Menu.Menu position='right'>

            <Menu.Item
              as={Link} to='/about'
              onClick={handleSetPage('About')}>
              <Icon name='question' />
              About
            </Menu.Item>

            <Menu.Item 
            onClick={handleLogout}>
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

export default connect(null, { setPage, logout })(DesktopContainer)