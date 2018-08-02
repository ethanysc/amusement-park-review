import React from 'react'
import { Link } from 'react-router'

const ParkIndexTile = props => {

  return(
    <figure className="snip1581"><img src="https://lunaparknyc.com/app/uploads/2018/03/LP_website-header-ConeyIslandCyclone.jpg" alt="profile-sample2"/>
      <figcaption>
        <h3 className="title3">{props.name}</h3>
      </figcaption>
      <Link to={`/amusement_parks/${props.id}`} />
    </figure>
  )
}

export default ParkIndexTile
