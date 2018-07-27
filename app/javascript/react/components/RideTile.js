import React from 'react'
import { Link } from 'react-router'

const RideTile = props => {

  return(
    <div>
      <Link to={`/amusement_parks/${props.parkId}/rides/${props.id}`}>{props.name}</Link>
    </div>
  )
}

export default RideTile;
