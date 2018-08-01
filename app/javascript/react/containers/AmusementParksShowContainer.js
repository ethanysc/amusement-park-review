import React from 'react';
import { browserHistory } from 'react-router'


import ParkShowTile from '../components/ParkShowTile'
import ReviewsContainer from './ReviewsContainer'
import ReviewFormContainer from './ReviewFormContainer'
import EditAmusementParkLink from '../components/EditAmusementParkLink'
import RidesIndexContainer from './RidesIndexContainer'
import DeleteAmusementParkButton from '../components/DeleteAmusementParkButton'

class AmusementParksShowContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amusementPark: {},
      reviews: [],
      currentUserId: null,
      rides: []
    };

    this.addReview = this.addReview.bind(this)
    this.deleteAmusementPark = this.deleteAmusementPark.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.id}.json`, {
      credentials: 'same-origin'
    })
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
        reviews: body.reviews,
        currentUserId: body.current_user_id,
        rides: body.rides
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
        if(body.review){
          this.setState({ reviews: this.state.reviews.concat(body.review) })
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteAmusementPark() {
    fetch(`/api/v1/amusement_parks/${this.props.params.id}.json`, {
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json',
      'X-Requested-With': 'XHMLttpRequest' },
      method: 'DELETE',
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
      .then(body => browserHistory.push('/amusement_parks'))
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let postReview = (payload) => {
      this.addReview(payload)
    }
    let deleteAmusementPark = () => {
      this.deleteAmusementPark()
    }

    let { amusementPark, reviews, currentUserId, rides } = this.state
    let editAmusementParkLink, deleteAmusementParkButton
    if (currentUserId == amusementPark.user_id) {
      editAmusementParkLink = <EditAmusementParkLink
                                id={amusementPark.id}
                              />
     deleteAmusementParkButton = <DeleteAmusementParkButton
                                  deleteAmusementPark = {deleteAmusementPark}
                                 />
    }




    return(
      <div>
        <ParkShowTile
          id={amusementPark.id}
          name={amusementPark.name}
          address={amusementPark.address}
          city={amusementPark.city}
          state={amusementPark.state}
          zipcode={amusementPark.zipcode}
          phone_number={amusementPark.phone_number}
          operating_season={amusementPark.operating_season}
          website={amusementPark.website}
          description={amusementPark.description}
        />
        {editAmusementParkLink}
        {deleteAmusementParkButton}
        <ReviewsContainer
          reviews={reviews}
        />
        <ReviewFormContainer
          id={amusementPark.id}
          postReview={postReview}
        />
        <RidesIndexContainer
          parkId={amusementPark.id}
          rides={rides}
        />
      </div>
    )
  }
}

export default AmusementParksShowContainer;
