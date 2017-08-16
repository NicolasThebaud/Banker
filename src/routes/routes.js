import React from 'react'
import { Route } from 'react-router'

import AppContainer from '../containers/AppContainer'

const Routes = () => (
  <div>
    <Route exact path="/" component={AppContainer} />
  </div>
)

export default Routes