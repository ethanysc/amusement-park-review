import React from 'react'

const RatingTile = (props) => {
  let reviewOverallRating = <p>Overall Rating: {props.review.overall_rating}</p>
  let ridesRating, atmosphereRating, foodRating, showsRating, staffRating, priceRating

  let propHasValue = (prop) => {
     if (prop != "" && prop != null) {
       return true
     }
     else {
       return false
     }
   }

   if (propHasValue(props.review.rides_rating)) {
     ridesRating = <p>Rides: {props.review.rides_rating}</p>
   }

   if (propHasValue(props.review.atmosphere_rating)) {
     atmosphereRating = <p>Atmosphere: {props.review.atmosphere_rating}</p>
   }

   if (propHasValue(props.review.food_rating)) {
     foodRating = <p>Food: {props.review.food_rating}</p>
   }

   if (propHasValue(props.review.shows_rating)) {
     showsRating = <p>Shows: {props.review.shows_rating}</p>
   }

   if (propHasValue(props.review.staff_rating)) {
     staffRating = <p>Staff: {props.review.staff_rating}</p>
   }

   if (propHasValue(props.review.price_rating)) {
     priceRating = <p>Price: {props.review.price_rating}</p>
   }

  return(
    <div>
      {reviewOverallRating}
      {ridesRating}
      {atmosphereRating}
      {foodRating}
      {showsRating}
      {staffRating}
      {priceRating}
    </div>
  )
}

export default RatingTile
