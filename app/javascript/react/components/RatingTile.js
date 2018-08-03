import React from 'react'

const RatingTile = (props) => {
  let reviewOverallRating = <p><strong>Overall Rating: </strong>{props.review.overall_rating}</p>
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
     ridesRating = <p><strong>Rides: </strong>{props.review.rides_rating}</p>
   }

   if (propHasValue(props.review.atmosphere_rating)) {
     atmosphereRating = <p><strong>Atmosphere: </strong>{props.review.atmosphere_rating}</p>
   }

   if (propHasValue(props.review.food_rating)) {
     foodRating = <p><strong>Food: </strong>{props.review.food_rating}</p>
   }

   if (propHasValue(props.review.shows_rating)) {
     showsRating = <p><strong>Shows: </strong>{props.review.shows_rating}</p>
   }

   if (propHasValue(props.review.staff_rating)) {
     staffRating = <p><strong>Staff: </strong>{props.review.staff_rating}</p>
   }

   if (propHasValue(props.review.price_rating)) {
     priceRating = <p><strong>Price: </strong>{props.review.price_rating}</p>
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
