// Libraries
import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
// Redux actions
import { initializeLog, newPerson, editPerson, deletePerson } from './store/logs/actions'
import { login, logout, editUserEmailNotifications } from './store/user/actions'
// Types
import { AppState } from './store'
import { Person } from './store/logs/types'

const tokenAuth = (token: string) => {
  return {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
}

export const thunkInitializeLog = ():
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    try {
      const state = getState()
      const response = await axios.get('/api/person', tokenAuth(state.user.token))
      dispatch(
        initializeLog({ persons: response.data })
      )
    } catch (error) {
      console.error(error)
    }
  }

export const thunkNewPerson = (person: Person):
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    try {
      const state = getState()
      const response = await axios.post('/api/person/new', person, tokenAuth(state.user.token))

      dispatch(
        newPerson(response.data.newPerson)
      )

    } catch (error) {
      console.error(error)
    }
  }

export const thunkEditPerson = (
  id: string, person: Person):
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    try {
      const state = getState()
      const response = await axios.put(`/api/person/${id}`, person, tokenAuth(state.user.token))
      dispatch(
        editPerson(response.data)
      )
    } catch (error) {
      console.log(error)
    }
  }

export const thunkDeletePerson = (
  id: string):
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    try {
      const state = getState()
      const response = await axios.delete(`/api/person/${id}`, tokenAuth(state.user.token))
      dispatch(
        deletePerson(response.data)
      )
    } catch (error) {
      console.log(error)
    }
  }

export const thunkLogin = (
  password: string, email: string):
  ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const response = await axios.post(`/api/user/login`, { password, email })
    dispatch(
      login(response.data)
    )

    return response.data
  }

export const thunkDeleteUser = ():
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    const user = getState().user
    const response = await axios.post(
      `/api/user/delete`, { username: user.username }, tokenAuth(user.token)
    )
    dispatch(
      logout()
    )
    localStorage.clear()

    return response.data
  }

export const thunkEditUserEmailNotifications = ():
  ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    try {
      const state = getState()
      const response = await axios
        .put(`/api/user/edit/email-notifications`,
          state.user.token,
          tokenAuth(state.user.token))

      dispatch(
        editUserEmailNotifications(response.data.allowEmailNotifications)
      )
    } catch (error) {
      console.log(error)
    }
  }
