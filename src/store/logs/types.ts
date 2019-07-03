export interface Person {
  id: string,
  name: string,
  relation: string,
  birth: Date,
  relative: boolean,
  likes?: string[],
  dislikes?: string[]
}

export interface LogState {
  persons: Person[]
}

export const INITIALIZE_LOG = 'INITIALIZE_PERSONS'
export const EDIT_PERSON = 'EDIT_PERSON'
export const NEW_PERSON = 'NEW_PERSON'
export const DELETE_PERSON = 'DELETE_PERSON'

interface InitializePersonsAction {
  type: typeof INITIALIZE_LOG,
  persons: LogState
}

interface EditPersonAction {
  type: typeof EDIT_PERSON,
  updatedPerson: Person,
}

interface NewPersonAction {
  type: typeof NEW_PERSON,
  newPerson: Person,
}

interface DeletePersonAction {
  type: typeof DELETE_PERSON,
  id: string
}

export type LogActionTypes =
  InitializePersonsAction |
  EditPersonAction |
  NewPersonAction |
  DeletePersonAction