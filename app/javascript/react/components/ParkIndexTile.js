import React from 'react'
import { Link } from 'react-router'

const ParkIndexTile = props => {
  let image = ''
  if(props.image.url){
    image = <img src={props.image.url} alt="profile-sample2"/>
  }
  return(
    <figure className="snip1581">{image}
      <figcaption>
        <h3 className="title3">{props.name}</h3>
      </figcaption>
      <Link to={`/amusement_parks/${props.id}`} />
    </figure>
  )
}

export default ParkIndexTile
