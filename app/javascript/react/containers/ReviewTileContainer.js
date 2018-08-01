import React from 'react'
import VoteTile from '../components/VoteTile'

class ReviewTileContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: null,
      reviewId: null,
      likes: 0,
      dislikes: 0,
      voteStatus: null,
      selectedButton: null,
      voteId: null
    }
    this.formatDate = this.formatDate.bind(this)
    this.onClick = this.onClick.bind(this)
    this.createVote = this.createVote.bind(this)
    this.editVote = this.editVote.bind(this)
    this.destroyVote = this.destroyVote.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.parkId}}/reviews/${this.props.id}.json`, {
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
        likes: body.likes,
        dislikes: body.dislikes
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  createVote(payload){
    fetch(`/api/v1/votes.json`, {
      credentials: 'same-origin',
      method: "POST",
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
      this.setState({
        userId: body.userVote.user_id,
        reviewId: body.userVote.review_id,
        likes: body.likes,
        dislikes: body.dislikes,
        voteStatus: body.userVote.vote,
        voteId: body.userVote.id,
        selectedButton: body.button
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  editVote(payload){
    fetch(`/api/v1/votes/${this.state.voteId}.json`, {
      credentials: 'same-origin',
      method: "PATCH",
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
      this.setState({
        userId: body.userVote.user_id,
        reviewId: body.userVote.review_id,
        likes: body.likes,
        dislikes: body.dislikes,
        selectedButton: body.button,
        voteId: body.userVote.id,
        voteStatus: body.userVote.vote
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  destroyVote(payload){
    fetch(`/api/v1/votes/${this.state.voteId}.json`, {
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
      this.setState({
        userId: body.userVote.user_id,
        reviewId: body.userVote.review_id,
        likes: body.likes,
        dislikes: body.dislikes,
        selectedButton: '',
        voteId: null,
        voteStatus: null
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  onClick(event){
    if (this.state.voteStatus == null){
      if(event.target.name == "like"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id,
          vote: 1
        }

        this.createVote(payload)
      }
      if(event.target.name == "dislike"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id,
          vote: -1
        }

        this.createVote(payload)
      }
    }
    else if (this.state.voteStatus == 1){
      if(event.target.name == "dislike"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id,
          vote: -1
        }
        this.editVote(payload)
      }
      if (event.target.name == "like"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id
        }
        this.destroyVote(payload)
      }
    }
    else if(this.state.voteStatus == -1){
      if(event.target.name == "like"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id,
          vote: 1
        }
        this.editVote(payload)
      }
      if(event.target.name == "dislike"){
        let payload = {
          userId: this.props.review.user.id,
          reviewId: this.props.id
        }
        this.destroyVote(payload)
      }
    }
  }

  formatDate(date){
    const MONTHS = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return MONTHS[monthIndex] + ' ' + day + ' ' + year;
  }
render(){
    let reviewBody = this.props.review.body
    let reviewOverallRating = this.props.review.overall_rating
    let createdDate = this.props.review.created_at.substring(0, 10)
    let formattedDate = this.formatDate(new Date(createdDate))
    let username = this.props.review.user.username
    let buttonClass = `button tiny ' + this.state.selectedButton`
    return(
      <div>
        {reviewBody}<br/>
        Rating: {reviewOverallRating}<br/>
        Date Reviewed: {formattedDate}<br/>
        User: {username}<br/>
      <VoteTile
        likes={this.state.likes}
        dislikes={this.state.dislikes}
        onClick={this.onClick}
        buttonClass={buttonClass}
      />
      </div>
    )
  }
}

export default ReviewTileContainer
