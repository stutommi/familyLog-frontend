// Types
import {
  User,
  UserActionTypes,
  LOGIN,
  LOGOUT,
  EDIT_USER_EMAIL_NOTIFICATIONS
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

export const editUserEmailNotifications = (allowEmailNotifications: boolean): UserActionTypes => {
  return {
    type: EDIT_USER_EMAIL_NOTIFICATIONS,
    allowEmailNotifications
  }
}