import React from 'react'

const RideTile = props => {

  return(
    <div>
      <a href={`/amusement_parks/${props.parkId}/rides/${props.id}`}>{props.name}</a>
    </div>
  )
}

export default RideTile;
