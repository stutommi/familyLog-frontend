// Libraries
import axios from 'axios'
import { Action } from 'redux'
import { initializeLog, newPerson, editPerson } from './store/logs/actions'
import { AppState } from './store'
import { ThunkAction } from 'redux-thunk'
// Types
import { Person } from './store/logs/types'

export const thunkInitializeLog = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3005/persons')
    dispatch(
      initializeLog({ persons: response.data })
    )
  } catch (error) {
    console.error(error)
  }
}

export const thunkNewPerson = (person: Person): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  console.log('THUNK')
  try {
    const response = await axios.post('http://localhost:3005/persons', person)
    dispatch(
      newPerson(response.data)
    )
  } catch (error) {
    console.error(error)
  }
}