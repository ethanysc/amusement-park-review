import React from 'react';
import ReviewTileContainer from './ReviewTileContainer'

class ReviewsContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    let reviews = this.props.reviews.map((review) => {
      let handleDelete = () => {
        this.props.deleteReview(review.id)
      }
      return(
      <div >
        <ReviewTileContainer
          parkId={this.props.parkId}
          key={review.id}
          id={review.id}
          review={review}
          handleDelete={handleDelete}
        />
      </div>
      )
    })
    return(
      <div className="row wrapper all-reviews-box">
        {reviews}
      </div>
    )
  }
}

export default ReviewsContainer
