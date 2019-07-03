// Types
import {
  LogActionTypes,
  LogState,
  INITIALIZE_LOG,
  EDIT_PERSON,
  NEW_PERSON,
  DELETE_PERSON
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
      return {
        persons: state.persons.map(person =>
          person.id === action.updatedPerson.id
            ? action.updatedPerson
            : person
        )
      }
    case NEW_PERSON:
      return {
        persons: state.persons.concat(action.newPerson)
      }
    case DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.id)
      }
    default:
      return state
  }
}