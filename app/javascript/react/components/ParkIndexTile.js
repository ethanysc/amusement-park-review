import React from 'react'
import { Link } from 'react-router'

const ParkIndexTile = props => {

  return(
    <div>
      <a href={`/amusement_parks/${props.id}`}>{props.name}</a>
    </div>
  )
}

export default ParkIndexTile
