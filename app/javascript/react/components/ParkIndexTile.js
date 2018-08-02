import React from 'react'
import { Link } from 'react-router'

const ParkIndexTile = props => {
  let image = ''
  if(props.image.url){
    image = <img src={props.image.url} />
  }
  return(
    <div className="park-name callout">
      <Link to={`/amusement_parks/${props.id}`}>
        {image}
        {props.name}
      </Link>
    </div>
  )
}

export default ParkIndexTile
