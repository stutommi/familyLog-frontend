// Libraries
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PromisePolyfill from 'promise-polyfill'
// Components
import { App } from './App'

// Promises for IE
if (!(window as any).MyNamespace) {
  (window as any).MyNamespace = PromisePolyfill
}


ReactDOM.render(<App />, document.getElementById('root'))