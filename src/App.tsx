// Libraries
import * as React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import ResponsiveLayout from './components/Layout/ResponsiveLayout'
import AboutView from './components/AboutView'
import LogView from './components/LogView'
import NewInfoForm from './components/NewInfoForm'
import PersonView from './components/PersonView'
import LoginView from './components/Login/LoginView'
// Redux actions
import { thunkInitializeLog } from './thunks'
import { login } from './store/user/actions'
// Types
import { LogState, Person } from './store/logs/types'
import { User } from './store/user/types'
import { AppState } from './store'
// Utils
import PrivateRoute from './utils/PrivateRoute'

interface AppProps {
  thunkInitializeLog: Function,
  log: LogState
  user: User
  login: typeof login
}

const App = (props: AppProps) => {
  const loggedIn = props.user !== null

  // Logs in automatically if localstore has token and user
  useEffect(() => {
    const token = window.localStorage.getItem('familylog-user-token')
    const user = window.localStorage.getItem('familylog-user-username')

    if (token && user) {
      props.login({
        username: user,
        token: token
      })
    }
  }, [])

  // Fetches logs from DB if logged in
  useEffect(() => {
    if (loggedIn) {
      props.thunkInitializeLog()
    }
  }, [loggedIn])

  const personById = (id: string): Person =>
    props.log.persons.find(person => person.id === id)

  return (
    <Router>
      <Route exact path='/login' render={() => <LoginView />} />
      <ResponsiveLayout loggedIn={loggedIn}>
        <>
          {loggedIn && <Redirect to='/logs' />}

          <PrivateRoute // ABOUT VIEW
            loggedIn={loggedIn}
            exact
            path='/about'
            component={AboutView} />

          <PrivateRoute // NEW PERSON FORM
            loggedIn={loggedIn}
            exact
            path='/new-info'
            component={NewInfoForm} />

          <PrivateRoute // LOGS
            loggedIn={loggedIn}
            exact
            path='/logs'
            component={LogView} />

          <PrivateRoute // PERSON VIEW
            loggedIn={loggedIn}
            personById={(id: any) => personById(id)}
            exact
            path='/logs/:id'
            component={PersonView} />
        </>
      </ ResponsiveLayout>
    </Router>
  )
}



const mapStateToProps = (state: AppState) => {
  return {
    log: state.log,
    user: state.user
  }
}

export default connect(mapStateToProps, { thunkInitializeLog, login })(App)