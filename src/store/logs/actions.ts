// Types
import {
  LogActionTypes,
  Person,
  LogState,
  INITIALIZE_LOG,
  CLEAR_LOG,
  EDIT_PERSON,
  NEW_PERSON,
  DELETE_PERSON
} from './types'

export const initializeLog = (logState: LogState): LogActionTypes => {
  return {
    type: INITIALIZE_LOG,
    persons: logState
  }
}

export const clearLog = (): LogActionTypes => {
  return {
    type: CLEAR_LOG,
  }
}

export const newPerson = (person: Person): LogActionTypes => {
  return {
    type: NEW_PERSON,
    newPerson: person
  }
}

export const editPerson = (person: Person): LogActionTypes => {
  return {
    type: EDIT_PERSON,
    updatedPerson: person
  }
}

export const deletePerson = (id: string): LogActionTypes => {
  return {
    type: DELETE_PERSON,
    id
  }
}
