import {
  FILE_UPLOADED
} from './action-types'

export function handleFile(data) {
  return {
    type: FILE_UPLOADED,
    payload: data
  }
}