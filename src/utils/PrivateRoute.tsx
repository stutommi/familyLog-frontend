// Libraries
import * as React from 'react'
import { Redirect, Route } from 'react-router'

// Enables protected routes for react-router
const PrivateRoute = ({ component: Component, loggedIn, personById, ...rest }: any) => {
  if (!loggedIn) {
    return <Redirect to='/login' />
  }

  if (personById) {
    return (<Route {...rest} render={({ match, person, ...props }: any) => {
      return <Component {...props} person={personById(match.params.id)} />
    }}>
    </Route >
    )
  }

  return (<Route {...rest} render={props => <Component {...props} />
  }>
  </Route>
  )
}
export default PrivateRoute
