import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import AmusementParksIndexContainer from './AmusementParksIndexContainer'
import AmusementParksShowContainer from './AmusementParksShowContainer'
import AmusementParksFormContainer from './AmusementParksFormContainer'
import AmusementParksEditContainer from './AmusementParksEditContainer'
import RideShowContainer from './RideShowContainer'
import NavBar from '../components/NavBar'

export const App = (props) => {
  return (
    <Router history={browserHistory} >
      <Route path='/' component={NavBar}>
        <IndexRoute component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks' component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks/new' component={AmusementParksFormContainer} />
        <Route path='/amusement_parks/:id' component={AmusementParksShowContainer} />
        <Route path='/amusement_parks/:id/edit' component={AmusementParksEditContainer} />
        <Route path='/amusement_parks/:amusement_park_id/rides/:id' component={RideShowContainer} />
      </Route>
    </Router>
  )
}

export default App
