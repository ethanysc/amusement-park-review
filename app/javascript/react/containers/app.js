import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import AmusementParksIndexContainer from './AmusementParksIndexContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory} >
      <Route path='/' >
        <IndexRoute component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks' component={AmusementParksIndexContainer} />
      </Route>
    </Router>
  )
}

export default App
