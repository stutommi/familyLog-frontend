
const initialLog: Array<object> = [
  {
    name: 'Krista Iskala',
    birth: new Date('10.19.1992'),
    relation: 'Girlfriend',
    relative: true
  },
  {
    name: 'Matti Tampio',
    birth: new Date('6.12.2019'),
    relation: 'Brother',
    relative: true
  },
  {
    name: 'Reijo Tampio',
    birth: new Date('12.30.1959'),
    relation: 'Father',
    relative: true    
  },
  {
    name: 'Reija Kälkäjä',
    birth: new Date('12.25.1962'),
    relation: 'Mother',
    relative: true    
  }
]

export const initializeLogs = () => {
  return (dispatch: any) => {
  dispatch({
    type: 'INIT_LOG',
    initialLog
  })
}
}

const reducer = (state = [] as any, action: any) => {
  switch (action.type) {
    case 'NEW_PERSON':
      break
    case 'EDIT_PERSON':
      break
    case 'INIT_LOG':
      state = initialLog
    default:
      return state = initialLog
  }
}

export default reducer