import React from 'react'
import { Link } from 'react-router'

const ParkTile = props => {

  return(
    <div>
      <Link to={`/amusement_parks/${props.id}`}>{props.name}</Link>
    </div>
  )
}

export default ParkTile
