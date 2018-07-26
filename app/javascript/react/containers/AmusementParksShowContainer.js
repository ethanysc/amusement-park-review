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
    .catch(error => console.error(`Error in park fetch: ${error.message}`));
  }

  render(){
    let park = this.state.amusementPark;
    let reviews = this.state.reviews;

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
        />
      </div>
    )
  }
}

export default AmusementParksShowContainer;
