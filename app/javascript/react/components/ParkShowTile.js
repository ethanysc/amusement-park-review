import React from 'react'

const ParkShowTile = props => {
<<<<<<< HEAD
  let descriptionDiv;
  if (props.description != "" && props.description != null) {
    descriptionDiv = <p>Description: {props.description}</p>
  }
=======
>>>>>>> 14353a07c3d6f7568904c9748745cf1f47c4c52d

  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.address}, {props.city}, {props.state}, {props.zipcode}.</p>
      <p>Phone Number: {props.phone_number}</p>
      <p>Operating Season: {props.operating_season}</p>
      <p>Website: <a href={props.website}>{props.website}</a></p>
      {descriptionDiv}
    </div>
  )
}

export default ParkShowTile
