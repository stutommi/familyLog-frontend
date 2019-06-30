export interface Page {
  page: string
}

export interface SystemState {
  page: string
}

export const SET_PAGE = 'SET_PAGE'


interface SetPageAction {
  type: typeof SET_PAGE,
  page: string
}


export type SystemActionTypes = SetPageAction