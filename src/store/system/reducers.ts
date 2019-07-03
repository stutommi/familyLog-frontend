// Types
import {
  SystemActionTypes,
  SystemState,
  SET_PAGE,
} from './types'

const initialState: SystemState = {
  page: 'Logs',
}

export const systemReducer = (
  state = initialState,
  action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    default:
      return state
  }
}