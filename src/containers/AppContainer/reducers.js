import store from '../../reducers'

import {
  FILE_UPLOADED,
  RESET_UPLOAD,
  SET_PARSED_DATA
} from './action-types'

const initialState = {
  fileData: null,
  parsedData: null
}

export function appContainerReducer(state = initialState, { type, payload }) {
  switch(type) {
    case FILE_UPLOADED: {
      if (!payload) return state

      return Object.assign({}, state, {
        fileData: payload
      })
    }

    case RESET_UPLOAD: {
      return Object.assign({}, state, {
        fileData: null
      })
    }

    case SET_PARSED_DATA: {
      if (!payload) return state

      return Object.assign({}, state, {
        parsedData: payload
      })
    }

    default:
      return state
  }
}