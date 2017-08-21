import {
  FILE_UPLOADED,
  RESET_UPLOAD,
  SET_PARSED_DATA
} from './action-types'

export function handleFile(data) {
  return {
    type: FILE_UPLOADED,
    payload: data
  }
}

export function resetUpload() {
  return { type: RESET_UPLOAD }
}

export function setParsedData(data) {
  return {
    type: SET_PARSED_DATA,
    payload: data
  }
}