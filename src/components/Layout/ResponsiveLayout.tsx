// Libraries
import * as React from 'react'
import { Redirect } from 'react-router-dom'
// Components
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

export interface ResponsiveLayoutProps {
  children: [JSX.Element] | JSX.Element,
  loggedIn: boolean
}

const ResponsiveLayout = (props: ResponsiveLayoutProps) => {
  
  if (!props.loggedIn) {
    return <Redirect to='/login' />
  }

  return (
    <>
      <MobileContainer>
        {props.children}
      </MobileContainer>

      <DesktopContainer>
        {props.children}
      </DesktopContainer>
    </>
  )
}

export default ResponsiveLayout