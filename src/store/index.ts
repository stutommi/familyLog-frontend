import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import { logReducer } from './logs/reducers'

const rootReducer = combineReducers({
  log: logReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type AppState = ReturnType<typeof rootReducer>