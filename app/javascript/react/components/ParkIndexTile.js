import React from 'react'

const ParkIndexTile = props => {

  return(
    <div>
      <a href={`/amusement_parks/${props.id}`}>{props.name}</a>
    </div>
  )
}

export default ParkIndexTile
