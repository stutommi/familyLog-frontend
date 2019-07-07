// Types
import {
  UserActionTypes,
  User,
  LOGIN,
  LOGOUT,
  EDIT_USER_EMAIL_NOTIFICATIONS
} from './types'

const initialState: User | null = null

export const userReducer = (
  state = initialState,
  action: UserActionTypes): User => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.user,
        loggedIn: true
      }
    case LOGOUT:
      return null
    case EDIT_USER_EMAIL_NOTIFICATIONS:
      return {
        ...state,
        allowEmailNotifications: action.allowEmailNotifications
      }
    default:
      return state
  }
}
