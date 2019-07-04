import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Reducers
import { logReducer } from './logs/reducers'
import { userReducer } from './user/reducers'

const rootReducer = combineReducers({
  log: logReducer,
  user: userReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type AppState = ReturnType<typeof rootReducer>