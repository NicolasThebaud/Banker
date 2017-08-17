import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import store from './reducers'
import Routes from 'routes'
import history from 'routes/history'

import 'themes/main.scss'

render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)