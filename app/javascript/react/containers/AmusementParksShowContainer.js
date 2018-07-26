import React from 'react';

import ParkShowTile from '../components/ParkShowTile'
import ReviewsContainer from './ReviewsContainer'
import ReviewFormContainer from './ReviewFormContainer'

class AmusementParksShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amusementPark: {},
      reviews: []
    };

    this.addReview = this.addReview.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        amusementPark: body.amusement_park,
        reviews: body.reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addReview(payload){
    fetch(`/api/v1/amusement_parks/${this.props.params.id}/reviews.json`, {
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
        if(body.review != {}){
          this.setState({ reviews: this.state.reviews.concat(body.review) })
        }

      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let park = this.state.amusementPark;
    let reviews = this.state.reviews;

    let postReview = (payload) => {
      this.addReview(payload)
    }

    return(
      <div>
        <ParkShowTile
          id={park.id}
          name={park.name}
          address={park.address}
          city={park.city}
          state={park.state}
          zipcode={park.zipcode}
          phone_number={park.phone_number}
          operating_season={park.operating_season}
          website={park.website}
        />
        <ReviewsContainer
          reviews={reviews}
        />
        <ReviewFormContainer
          id={park.id}
          postReview={postReview}
        />
      </div>
    )
  }
}

export default AmusementParksShowContainer;
