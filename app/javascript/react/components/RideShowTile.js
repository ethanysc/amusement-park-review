import React from 'react'

const RideShowTile = props => {

  let features
  if(props.features.length != 0){
    features = props.features.map((feature) => {
      return(
        <div key={feature.id}>{feature.name}</div>
      )
    })
  }

  return(
    <div>
      <h1>{props.name}</h1>
      {features}
    </div>
  )
}

export default RideShowTile
