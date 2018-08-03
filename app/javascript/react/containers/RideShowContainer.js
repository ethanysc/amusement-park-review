import React from 'react';

import RideShowTile from '../components/RideShowTile'
import RideReviewFormContainer from './RideReviewFormContainer'
import RideReviewsContainer from './RideReviewsContainer'
import YouTubeTile from '../components/YouTubeTile'

class RideShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ride: {},
      features: [],
      parkId: null,
      reviews: [],
      youtubeId: ""
    }
    this.addRideReview = this.addRideReview.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.amusement_park_id}/rides/${this.props.params.id}.json`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          if(response.status == 401){
            alert("You must be signed in to leave reviews!!!")
          }
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        ride: body.ride,
        features: body.features,
        parkId: body.amusement_park_id,
        reviews: body.ride_reviews,
        youtubeId: body.youtube_id
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addRideReview(payload){
    fetch(`/api/v1/amusement_parks/${this.props.params.amusement_park_id}/rides/${this.props.params.id}/ride_reviews.json`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json',
      'X-Requested-With': 'XHMLttpRequest' },
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        if(response.ok){
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => response.json())
      .then(body => {
        if(body.ride_review){
          this.setState({ reviews: this.state.reviews.concat(body.ride_review) })
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div>
        <RideShowTile
          id={this.state.ride.id}
          name={this.state.ride.name}
          features={this.state.features}
          rideReviews = {this.state.reviews}
          youtubeId={this.state.youtubeId}
        />
        <RideReviewsContainer
          rideReviews={this.state.reviews}
        />
        <RideReviewFormContainer
          id={this.state.ride.id}
          postRideReview={this.addRideReview}
        />
      </div>
    )
  }
}

export default RideShowContainer;
