import React from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewsContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    let reviews = this.props.reviews.map((review) => {

      return(
        <ReviewTile
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
