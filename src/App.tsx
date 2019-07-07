// Libraries
import * as React from 'react'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
// Components
import ResponsiveLayout from './components/Layout/ResponsiveLayout'
import AboutView from './components/About/AboutView'
import LogView from './components/Log/LogView'
import NewInfoForm from './components/NewInfoForm'
import PersonView from './components//PersonInfo/PersonView'
import LoginView from './components/Login/LoginView'
import SettingsView from './components/Settings/SettingsView'
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
  thunkInitializeLog: () => void,
  log: LogState
  user: User
  login: typeof login
}

const App = (props: AppProps) => {
  const [loggedIn, setLoggedIn] = useState(undefined)

  // Logs in automatically if localstore has token and user
  useEffect(() => {
    const token = window.localStorage.getItem('familylog-user-token')
    const user = window.localStorage.getItem('familylog-user-username')
    const allowEmailNotifications = window.localStorage.getItem('familylog-user-allowEmailNotifications')

    if (token && user && allowEmailNotifications) {
      props.login({
        username: user,
        token,
        allowEmailNotifications: JSON.parse(allowEmailNotifications)
      })

      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

  }, [])

  // Fetches logs from DB if logged in
  useEffect(() => {
    if (loggedIn) {
      props.thunkInitializeLog()
    }
  }, [loggedIn])

  useEffect(() => {
    if (props.user === null && loggedIn !== undefined) {
      setLoggedIn(false)
    } else if
      (props.user !== null && props.user.loggedIn) {
      setLoggedIn(true)
    }

  }, [props.user, loggedIn])

  const personById = (id: string): Person =>
    props.log.persons.find(person => person.id === id)

  return (
    <Router>

      {
        loggedIn === undefined

          ? <Loader inverted />

          : <>
            <Route exact path='/login' render={() => <LoginView />} />
            <ResponsiveLayout loggedIn={loggedIn}>
              <>
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

                <PrivateRoute // SETTINGS
                  loggedIn={loggedIn}
                  exact
                  path='/settings'
                  component={SettingsView} />
              </>
            </ ResponsiveLayout>
          </>
      }
    </Router>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    log: state.log,
    user: state.user
  }
}

// @ts-ignore
export default connect(mapStateToProps, { thunkInitializeLog, login })(App)
