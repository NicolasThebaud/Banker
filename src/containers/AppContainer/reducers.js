import {
  FILE_UPLOADED,
  RESET_UPLOAD
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

    case RESET_UPLOAD: {
      return Object.assign({}, state, {
        fileData: null
      })
    }

    default:
      return state
  }
}