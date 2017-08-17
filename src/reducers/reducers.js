import { combineReducers, createStore } from 'redux'

import { appContainer } from '../containers/AppContainer'

const rootReducer = combineReducers({
	appContainer
})

export default createStore(rootReducer)
