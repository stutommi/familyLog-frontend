// Libraries
import * as React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import ResponsiveLayout from './components/ResponsiveLayout'
import AboutView from './components/AboutView'
import LogView from './components/Login/LogView'
import NewInfoForm from './components/NewInfoForm'
import PersonView from './components/PersonView'
// Redux actions
import { thunkInitializeLog } from './thunks'
// Types
import { LogState, Person } from './store/logs/types'
import { AppState } from './store'

interface AppProps {
  thunkInitializeLog: Function,
  log: LogState
}

const App = (props: AppProps) => {
  useEffect(() => {
    props.thunkInitializeLog()
  }, [])

  const personById = (id: string): Person =>
    props.log.persons.find(person => person.id === id)

  return (
    <Router>
      <ResponsiveLayout logOut={() => console.log('logout')}>
        <>
          <Route exact path='/about' render={() => <AboutView />} />
          <Route exact path='/new-info' render={() => <NewInfoForm />} />
          <Route exact path='/logs' render={() => <LogView />} />
          <Route exact path='/logs/:id' render={({ match }) =>
            <PersonView person={personById(match.params.id)} />
          } />
        </>
      </ ResponsiveLayout>
    </Router>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    log: state.log
  }
}

export default connect(mapStateToProps, { thunkInitializeLog })(App)