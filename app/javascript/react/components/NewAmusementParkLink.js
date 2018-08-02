import React from 'react'
import { Link } from 'react-router'

const NewAmusementParkLink = props => {
  return(
    <div>
      <br></br><br></br><br></br><br></br>
      <div className="new-park">
        <Link to='/amusement_parks/new' >Add New Amusement Park to be Reviewed</Link>
      </div>
    </div>
  )
}

export default NewAmusementParkLink
