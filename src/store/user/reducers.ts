// Types
import {
  UserActionTypes,
  User,
  LOGIN,
  LOGOUT
} from './types'

const initialState: User | null = null

export const userReducer = (
  state = initialState,
  action: UserActionTypes): User => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.user
      }
    case LOGOUT:
      return null
    default:
      return state
  }
}