// Libraries
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Components
import ResponsiveLayout from './components/ResponsiveLayout'
import AboutView from './components/AboutView'


import Hello from './components/Hello'

export const App = () => {

  return (
    <Router>
      <ResponsiveLayout logOut={() => console.log('logout')}>
        <>
        <Route exact path='/about' render={() => <AboutView />} />
        </>
      </ ResponsiveLayout>
    </Router>
  )
}