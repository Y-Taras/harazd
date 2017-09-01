import { ADD_GSHEETS_DATA } from './actions'
import axios from 'axios'

export function addGSheetsData (gSheetsData) {
  return {
    type: ADD_GSHEETS_DATA,
    gSheetsData: gSheetsData
  }
}

export function getGSheetsData () {
  return function (dispatch) {
    const sheetID = '1EQooWYnjOoY_UC0BLLnH-vXBA073jA8K14jYeAXZAi0'
    axios
      .get(
        `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/basic?alt=json`
      )
      .then(response => {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${response.status}`
          )
          return
        }
        dispatch(addGSheetsData(response.data.feed.entry))
      })
      .catch(err => {
        console.log('axios error :-S', err)
      })
  }
}
