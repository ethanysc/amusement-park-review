import React from 'react'

const ReviewTile = (props) => {
  let reviewBody = props.review.body
  let reviewOverallRating = props.review.overall_rating
  let createdDate = props.review.created_at

  return(
    <div>
      {reviewBody}
      {reviewOverallRating}
      {createdDate}
    </div>
  )
}

export default ReviewTile
