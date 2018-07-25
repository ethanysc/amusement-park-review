import React from 'react';

import ReviewTile from '../components/ReviewTile'

class ReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.id}/reviews`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errrorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => { this.setState({
        reviews: body.reviews
      })
    })
    .catch(error => console.error(`Error in review fetch: ${error.message}`));
  }

  render(){
    let reviews = this.state.reviews.map((review) => {
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
