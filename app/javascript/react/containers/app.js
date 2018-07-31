import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

import AmusementParksIndexContainer from './AmusementParksIndexContainer'
import AmusementParksShowContainer from './AmusementParksShowContainer'
import AmusementParksFormContainer from './AmusementParksFormContainer'


export const App = (props) => {
  return (
    <Router history={browserHistory} >
      <Route path='/' >
        <IndexRoute component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks' component={AmusementParksIndexContainer} />
        <Route path='/amusement_parks/new' component={AmusementParksFormContainer} />
        <Route path='/amusement_parks/:id' component={AmusementParksShowContainer} />
      </Route>
    </Router>
  )
}

export default App
