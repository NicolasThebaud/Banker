import React from 'react'
import { Route } from 'react-router'

import AppContainer from '../containers/AppContainer'
import OverviewContainer from '../containers/OverviewContainer'

const Routes = () => (
  <div>
    <Route exact path="/" component={AppContainer} />
    <Route path="/overview" component={OverviewContainer} />
  </div>
)

export default Routes