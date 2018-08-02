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

  let roundToOneDeci = (average) => {
    return Math.round(average * 10) / 10
  }

  let ratingTotal = 0
  let ratingAvg = "N/A"

  if (props.rideReviews.length > 0) {
    props.rideReviews.forEach(review => {
      ratingTotal += review.rating
    })
    ratingAvg = roundToOneDeci((ratingTotal / props.rideReviews.length))

  }

  return(
    <div>
      <h1>{props.name}</h1>
      {features}
      Average Rating: {ratingAvg}
    </div>
  )
}

export default RideShowTile
