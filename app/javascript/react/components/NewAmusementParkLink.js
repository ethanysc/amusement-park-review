import React from 'react'
import { Link } from 'react-router'

const NewAmusementParkLink = props => {
  return(
    <div>
      <br></br><br></br><br></br><br></br>
      <Link to='/amusement_parks/new'><button className="button " >Add New Amusement Park</button></Link>
    </div>
  )
}

export default NewAmusementParkLink
