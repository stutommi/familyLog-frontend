// Libraries
import * as React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

interface MenuItemsMobileProps {
  setShowSidebar: (bool: boolean) => void
}

const MenuItemsMobile = ({ setShowSidebar }: MenuItemsMobileProps) => (
  <>
    <Menu.Item
      as={Link} to='/logs'
      onClick={() => setShowSidebar(false)}>
      <Icon name='list alternate' />
      Logs
          </Menu.Item>

    <Menu.Item
      as={Link} to='/new-info'
      onClick={() => setShowSidebar(false)}>
      <Icon name='add user' />
      Add to log
          </Menu.Item>

    <Menu.Item
      as={Link} to='/settings'
      onClick={() => setShowSidebar(false)}>
      <Icon name='settings' />
      Settings
            </Menu.Item>

    <Menu.Item
      as={Link} to='/about'
      onClick={() => setShowSidebar(false)}>
      <Icon name='question' />
      About
            </Menu.Item>
  </>
)

export default MenuItemsMobile
