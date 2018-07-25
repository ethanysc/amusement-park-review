import React from 'react'

const ReviewTile = (props) => {

  let reviewBody = this.props.review.body
  let reviewOverallRating = this.props.review.overall_rating
  let createdDate = this.props.review.created_at

  return(
    <div>
      {reviewBody}
      {reviewOverallRating}
      {createdDate}
    </div>
  )
}

export default ReviewTile
