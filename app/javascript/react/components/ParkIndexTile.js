import React from 'react'
import { Link } from 'react-router'

const ParkIndexTile = props => {
  let image = ''
  if(props.image.url){
    image = <img src={props.image.url} />
  }
  else {
    image = <img src="https://lunaparknyc.com/app/uploads/2018/03/LP_website-header-ConeyIslandCyclone.jpg" />
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
