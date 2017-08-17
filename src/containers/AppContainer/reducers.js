import {
  FILE_UPLOADED
} from './action-types'

const initialState = {
  fileData: null
}

import store from '../../reducers'

export function appContainerReducer(state = initialState, action) {
  switch(action.type) {
    case FILE_UPLOADED: {

      if (!action.payload) return state

      return Object.assign({}, state, {
        fileData: action.payload
      })
    }

    default:
      return state
  }
}