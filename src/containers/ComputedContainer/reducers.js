import store from '../../reducers'

import {
  ADD_COMPUTED_VALUE,
  UPDATE_COMPUTED_VALUE,
  DEL_COMPUTED_VALUE
} from './action-types'

const initialState = {
  computed: []
}

export function computedContainerReducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_COMPUTED_VALUE: {
      return Object.assign({}, state, {
        computed: state.computed.concat({})
      })
    }

    case UPDATE_COMPUTED_VALUE: {
      // (!payload) would evaluate when payload = 0 (1st index)
      if (payload === undefined) return state

      const tmp = state.computed.slice(0)
      tmp[payload.index] = payload.data
      return Object.assign({}, state, {
        computed: tmp
      })
    }

    case DEL_COMPUTED_VALUE: {
      // (!payload) would evaluate when payload = 0 (1st index)
      if (payload === undefined) return state

      state.computed.splice(payload, 1)
      return Object.assign({}, state, {
        computed: [].concat(state.computed)
      })
    }

    default:
      return state
  }
}