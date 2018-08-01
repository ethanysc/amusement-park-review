import React from 'react';
import ReviewTileContainer from './ReviewTileContainer'

class ReviewsContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    let reviews = this.props.reviews.map((review) => {
      return(
        <ReviewTileContainer
          parkId={this.props.parkId}
          key={review.id}
          id={review.id}
          review={review}
        />
      )
    })
    return(
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewsContainer
