import React from 'react';
import RideReviewTile from '../components/RideReviewTile'

class RideReviewsContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){

    let rideReviews = this.props.rideReviews.map((rideReview) => {
      return(
        <RideReviewTile
          key={rideReview.id}
          id={rideReview.id}
          review={rideReview}
        />
      )
    })
    return(
      <div className="row wrapper ride-reviews-box">
        {rideReviews}
      </div>
    )
  }
}

export default RideReviewsContainer
