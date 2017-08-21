import { combineReducers, createStore } from 'redux'

import { appContainerReducer } from '../containers/AppContainer'
import { computedContainerReducer } from '../containers/ComputedContainer'

const rootReducer = combineReducers({
	appContainer: appContainerReducer,
  computedContainer: computedContainerReducer
})

export default createStore(rootReducer)
