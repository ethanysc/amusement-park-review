import React from 'react';

import RideShowTile from '../components/RideShowTile'

class RideShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ride: {},
      features: [],
      parkId: null
    }
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.amusement_park_id}/rides/${this.props.params.id}.json`)
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
        ride: body.ride,
        features: body.features,
        parkId: body.amusement_park_id
      })
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
        />
      </div>
    )
  }
}

export default RideShowContainer;
