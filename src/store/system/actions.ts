// Types
import {
  SystemActionTypes,
  SET_PAGE,
} from './types'

export const setPage = (page: string): SystemActionTypes => {
  return {
    type: SET_PAGE,
    page
  }
}
