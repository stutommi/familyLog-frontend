export interface User {
  token: string | null
  username: string
}

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
  type: typeof LOGIN,
  user: User
}

interface LogoutAction {
  type: typeof LOGOUT,
  user: User
}

export type UserActionTypes = LoginAction | LogoutAction