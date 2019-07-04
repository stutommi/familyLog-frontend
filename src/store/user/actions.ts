// Types
import {
  User,
  UserActionTypes,
  LOGIN,
  LOGOUT
} from './types'

export const login = (user: User): UserActionTypes => {
  return {
    type: LOGIN,
    user
  }
}

export const logout = (): UserActionTypes => {

  return {
    type: LOGOUT,
    user: null
  }
}