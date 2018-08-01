import React from 'react';

const RideReviewTile = (props) => {

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

  let createdDate = props.review.created_at.substring(0, 10)
  let formattedDate = formatDate(new Date(createdDate))

  return(
    <div>
      {props.review.rating}
      {props.review.user.username}
      {formattedDate}
    </div>
  )
}

export default RideReviewTile
