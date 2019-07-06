export interface User {
  token: string | null
  username: string
  loggedIn?: boolean
  allowEmailNotifications: boolean
}

export interface LoginArgs {
  username: string
  token: string
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const EDIT_USER_EMAIL_NOTIFICATIONS = 'EDIT_USER_EMAIL_NOTIFICATIONS'

interface EditUserEmailNotificationsAction {
  type: typeof EDIT_USER_EMAIL_NOTIFICATIONS
  allowEmailNotifications: boolean
}

interface LoginAction {
  type: typeof LOGIN,
  user: User
}

interface LogoutAction {
  type: typeof LOGOUT,
  user: User
}

export type UserActionTypes = LoginAction | LogoutAction | EditUserEmailNotificationsAction