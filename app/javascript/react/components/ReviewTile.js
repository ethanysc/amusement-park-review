import React from 'react'

class ReviewTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: null,
      reviewId: null,
      likes: 0,
      dislikes: 0,
      voteStatus: null,
      selectedButton: null
    }
    this.formatDate = this.formatDate.bind(this)
    this.onClick = this.onClick.bind(this)
    this.createVote = this.createVote.bind(this)
    this.editVote = this.editVote.bind(this)
    this.destroyVote = this.destroyVote.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.parkId}}/reviews/${this.props.review.id}`)
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
      let buttonStr = ''
      if (body.voteStatus == 1){
        buttonStr = 'like'
      }
      else if (body.voteStatus == -1){
        buttonStr = 'dislike'
      }
      this.setState({
        likes: body.likes,
        dislikes: body.dislikes,
        voteStatus: body.voteStatus,
        selectedButton: buttonStr
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
        reviewId: body.userVote.review_id
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  editVote(){

  }

  destroyVote(){

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

    }
    else if(this.state.voteStatus == -1){

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

    return MONTHS[monthIndex] + " " + day + ' ' + year;
  }
render(){

    let reviewBody = this.props.review.body
    let reviewOverallRating = this.props.review.overall_rating
    let createdDate = this.props.review.created_at.substring(0, 10)
    let formattedDate = this.formatDate(new Date(createdDate))
    let username = this.props.review.user.username
    let buttonClass = `button tiny ${this.state.selectedButton}`
    return(
      <div>
        {reviewBody}<br/>
        Rating: {reviewOverallRating}<br/>
        Date Reviewed: {formattedDate}<br/>
        User: {username}<br/>
      <button name="like" onClick={this.onClick} className={buttonClass}>Like</button> Likes: {this.state.likes} <button onClick={this.onClick} name="dislike" className={buttonClass}>Dislike</button> Dislikes: {this.state.dislikes}
      </div>
    )
  }
}

export default ReviewTile
