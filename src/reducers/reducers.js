import { combineReducers, createStore } from 'redux'

import { appContainerReducer } from '../containers/AppContainer'

const rootReducer = combineReducers({
	appContainer: appContainerReducer
})

export default createStore(rootReducer)
