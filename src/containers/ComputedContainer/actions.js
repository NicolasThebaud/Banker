import {
  ADD_COMPUTED_VALUE,
  UPDATE_COMPUTED_VALUE,
  DEL_COMPUTED_VALUE
} from './action-types'

export function addComputedValue() {
  return {
    type: ADD_COMPUTED_VALUE
  }
}

export function updateComputedValue(index, data) {
  return {
    type: UPDATE_COMPUTED_VALUE,
    payload: { index, data }
  }
}

export function delComputedValue(index) {
  return {
    type: DEL_COMPUTED_VALUE,
    payload: index
  }
}
