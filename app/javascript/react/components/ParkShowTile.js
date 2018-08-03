import React from 'react'

const ParkShowTile = props => {
  let descriptionDiv;
  if (props.description != "" && props.description != null) {
    descriptionDiv = <p>{props.description}</p>
  }

  let ratingExists = (rating) => {
    if (rating != "" && rating != null) {
      return true
    } else {
      return false
    }
  }

  let overallRatingsTotal = 0
  let ridesRatingTotal = 0
  let ridesRatingLength = 0
  let atmosphereRatingTotal = 0
  let atmosphereRatingLength = 0
  let showsRatingTotal = 0
  let showsRatingLength = 0
  let staffRatingTotal = 0
  let staffRatingLength = 0
  let foodRatingTotal = 0
  let foodRatingLength = 0
  let priceRatingTotal = 0
  let priceRatingLength = 0

  let overallRatingAverage = "N/A"
  let ridesRatingAvg = "N/A"
  let atmosphereRatingAvg = "N/A"
  let foodRatingAvg = "N/A"
  let showsRatingAvg = "N/A"
  let staffRatingAvg = "N/A"
  let priceRatingAvg = "N/A"


  let roundToOneDeci = (average) => {
    return Math.round(average * 10) / 10
  }

  if (props.reviews.length > 0) {
    props.reviews.forEach(review => {
      overallRatingsTotal += review.overall_rating
      if (ratingExists(review.rides_rating)) {
        ridesRatingTotal += review.rides_rating
        ridesRatingLength += 1
      }
      if (ratingExists(review.atmosphere_rating)) {
        atmosphereRatingTotal += review.atmosphere_rating
        atmosphereRatingLength += 1
      }
      if (ratingExists(review.shows_rating)) {
        showsRatingTotal += review.shows_rating
        showsRatingLength += 1
      }
      if (ratingExists(review.staff_rating)) {
        staffRatingTotal += review.staff_rating
        staffRatingLength += 1
      }
      if (ratingExists(review.food_rating)) {
        foodRatingTotal += review.food_rating
        foodRatingLength += 1
      }
      if (ratingExists(review.price_rating)) {
        priceRatingTotal += review.price_rating
        priceRatingLength += 1
      }
    })

    overallRatingAverage = roundToOneDeci((overallRatingsTotal / props.reviews.length))
    if (ridesRatingLength > 0) {
      ridesRatingAvg = roundToOneDeci((ridesRatingTotal / ridesRatingLength))
    }
    if (atmosphereRatingLength > 0) {
      atmosphereRatingAvg = roundToOneDeci((atmosphereRatingTotal / atmosphereRatingLength))
    }
    if (showsRatingLength > 0) {
      showsRatingAvg = roundToOneDeci((showsRatingTotal / showsRatingLength))
    }
    if (staffRatingLength > 0) {
      staffRatingAvg = roundToOneDeci((staffRatingTotal / staffRatingLength))
    }
    if (priceRatingLength > 0) {
      priceRatingAvg = roundToOneDeci((priceRatingTotal / priceRatingLength))
    }
    if (foodRatingLength > 0) {
      foodRatingAvg = roundToOneDeci((foodRatingTotal / foodRatingLength))
    }
  }

  return(
    <div>
      <h1 className="row wrapper title" id="title-home">{props.name}</h1>
      <div className="info-bar row wrapper">
        <p>
          {`${props.address}, ${props.city}, ${props.state}, ${props.zipcode} `}
          <span> | </span>
          {props.phone_number} |
          Operating Season: {props.operating_season}
        </p>
          <a href={props.website}>
            {props.website}
          </a>
          {descriptionDiv}
      </div>

      <div>
      <h4 id="score-title">Average Ratings</h4>
        <div className="row wrapper" id="overall-rating">
          {overallRatingAverage}
        </div>
      </div>

      <br></br>
      <div className="small-6 small-centered columns">
        <div className="row">
          <div className="small-4 columns">
            <p className="park-rating">{ridesRatingAvg} </p>
            <div>Rides</div>
          </div>
          <div className="small-4 columns">
            <p className="park-rating">{atmosphereRatingAvg} </p>
              <div>Atmosphere</div>
          </div>
          <div className="small-4 columns">
            <p className="park-rating">{foodRatingAvg} </p>
              <div>Food</div>
          </div>
        </div>
      </div>

      <br></br>
      <div className="small-6 small-centered columns">
        <div className="row">
          <div className="small-4 columns">
            <p className="park-rating">{showsRatingAvg} </p>
            <div>Shows</div>
          </div>
          <div className="small-4 columns">
            <p className="park-rating">{staffRatingAvg} </p>
              <div>Staff</div>
          </div>
          <div className="small-4 columns">
            <p className="park-rating">{priceRatingAvg} </p>
              <div>Price</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ParkShowTile
