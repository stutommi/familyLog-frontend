// Libraries
import * as React from 'react'
// Components
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

export interface ResponsiveLayoutProps {
  children: [JSX.Element] | JSX.Element,
  logOut: Function,
}

const ResponsiveLayout = (props: ResponsiveLayoutProps) => {

  return (
    <>
      <MobileContainer  // Mobile view
        logOut={props.logOut}>
        {props.children}
      </MobileContainer>

      <DesktopContainer // Tablet - desktop view
        logOut={props.logOut}>
        {props.children}
      </DesktopContainer>
    </>
  )
}

export default ResponsiveLayout