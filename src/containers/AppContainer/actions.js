import {
  FILE_UPLOADED,
  RESET_UPLOAD
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
