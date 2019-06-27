// Libraries
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as PromisePolyfill from 'promise-polyfill'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// Components
import App from './App'
// Reducers
import logReducer from './reducers/logReducer'

// Promises for IE
if (!(window as any).MyNamespace) {
  (window as any).MyNamespace = PromisePolyfill
}

const reducer = combineReducers({
  logs: logReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))