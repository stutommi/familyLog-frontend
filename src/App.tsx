// Libraries
import * as React from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
// Components
import ResponsiveLayout from './components/ResponsiveLayout'
import AboutView from './components/AboutView'
import LogView from './components/LogView'
import NewInfoForm from './components/NewInfoForm'
// Redux actions
import { thunkInitializeLog } from './thunks'

interface AppProps {
  thunkInitializeLog: Function
}

const App = (props: AppProps) => {
  useEffect(() => {
    props.thunkInitializeLog()
  }, [])

  return (
    <Router>
      <ResponsiveLayout logOut={() => console.log('logout')}>
        <>
          <Route exact path='/about' render={() => <AboutView />} />
          <Route exact path='/new-info' render={() => <NewInfoForm />} />
          <Route exact path='/' render={() => <LogView />} />
        </>
      </ ResponsiveLayout>
    </Router>
  )
}

export default connect(null, { thunkInitializeLog })(App)