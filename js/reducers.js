import { ADD_GSHEETS_DATA } from './actions'

const DEFAULT_STATE = {
  gSheetsData: []
}

const addGSheetsData = (state, action) => {
  return Object.assign({}, state, {gSheetsData: action.gSheetsData})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_GSHEETS_DATA:
      return addGSheetsData(state, action)
    default:
      return state
  }
}

export default rootReducer
