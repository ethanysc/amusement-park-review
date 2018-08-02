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
      adminStatus: false,
      rides: []
    };

    this.addReview = this.addReview.bind(this)
    this.deleteAmusementPark = this.deleteAmusementPark.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
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
        rides: body.rides,
        adminStatus: body.admin_status
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
              if(response.status == 401){
                alert("You must be signed in to leave reviews!!!")
              }
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

  deleteReview(reviewId){
    let payload = {
      reviewId: reviewId
    }
    fetch(`/api/v1/reviews/${reviewId}`, {
      credentials: 'same-origin',
      method: "DELETE",
      body: JSON.stringify(payload),
      headers: { 'X-Requested-With': 'XHMLttpRequest', 'Content-Type': 'application/json' }
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
      let newReviewArray = this.state.reviews.filter( review => {
        return review.id != reviewId
      })
      this.setState({
        reviews: newReviewArray
      })
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

    let { amusementPark, reviews, currentUserId, rides, adminStatus } = this.state
    let editAmusementParkLink, deleteAmusementParkButton
    if (currentUserId == amusementPark.user_id || adminStatus == true) {
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
          reviews = {this.state.reviews}
        />
        {editAmusementParkLink}
        {deleteAmusementParkButton}
        <h2 className="row wrapper title" id="title-home">Popular Rides</h2>
        <RidesIndexContainer
          parkId={amusementPark.id}
          rides={rides}
          />
        <div className="row wrapper">
          <div className="review-area small-6 columns">
            <ReviewsContainer
              reviews={reviews}
              parkId={amusementPark.id}
              deleteReview={this.deleteReview}
            />
          </div>
          <div className="review-area small-6 columns">
            <ReviewFormContainer
              id={amusementPark.id}
              postReview={postReview}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AmusementParksShowContainer;
