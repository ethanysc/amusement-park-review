import React from 'react';
import ParkInfoTile from '../components/ParkInfoTile';

class AmusementParksShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amusementPark: {}
    };
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.id}`)
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
        amusementPark: body.amusement_park
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let park = this.state.amusementPark
    return(
      <div>
        <ParkInfoTile
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
      </div>
    )
  }
}

export default AmusementParksShowContainer;
