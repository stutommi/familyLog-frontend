// Libraries
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PromisePolyfill from 'promise-polyfill'
import { Provider } from 'react-redux'
// Redux store
import { store } from './store'

// Components
import App from './App'

// Promises for IE
if (!(window as any).MyNamespace) {
  (window as any).MyNamespace = PromisePolyfill
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))