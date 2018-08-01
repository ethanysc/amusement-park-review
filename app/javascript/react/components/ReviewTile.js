import React from 'react'

const ReviewTile = (props) => {

  function formatDate(date) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex] + " " + day + ' ' + year;
  }

  let reviewBody = props.review.body
  let reviewOverallRating = props.review.overall_rating
  let createdDate = props.review.created_at.substring(0, 10)
  let formattedDate = formatDate(new Date(createdDate))
  let username = props.review.user.username

  return(
    <div>
      {reviewBody}
      {reviewOverallRating}
      {formattedDate}
      {username}
    </div>
  )
}

export default ReviewTile
