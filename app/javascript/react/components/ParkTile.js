import React from 'react'

const ParkTile = props => {

  return(
    <div>
      <a href={`/amusement_parks/${props.id}`}>{props.name}</a>
    </div>
  )
}

export default ParkTile
