// Types
import {
  LogActionTypes,
  Person,
  LogState,
  INITIALIZE_LOG,
  EDIT_PERSON,
  NEW_PERSON
} from './types'

const initialState: LogState = {
  persons: []
}

export const logReducer = (
  state = initialState,
  action: LogActionTypes): LogState => {
  switch (action.type) {
    case INITIALIZE_LOG:
      state = action.persons
      return state
    case EDIT_PERSON:
      state.persons.map(person => {
        person.id === action.updatedPerson.id
          ? action.updatedPerson
          : person
      })
      return state
    case NEW_PERSON:
      state.persons.concat(action.newPerson)
      return state
    default:
      return state
  }
}