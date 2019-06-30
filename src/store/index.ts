import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import { logReducer } from './logs/reducers'
import { systemReducer } from './system/reducers'

const rootReducer = combineReducers({
  log: logReducer,
  system: systemReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type AppState = ReturnType<typeof rootReducer>