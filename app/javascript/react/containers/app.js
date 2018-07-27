import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import AmusementParksIndexContainer from './AmusementParksIndexContainer'
import AmusementParksShowContainer from './AmusementParksShowContainer'
import RideShowContainer from './RideShowContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory} >
      <Route path='/' >
        <IndexRoute component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks' component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks/:id' component={AmusementParksShowContainer} />
        <Route path='/amusement_parks/:amusement_park_id/rides/:id' component={RideShowContainer} />
      </Route>
    </Router>
  )
}

export default App
