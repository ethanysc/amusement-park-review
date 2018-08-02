import React from 'react'
import ReviewFormInput from '../components/ReviewFormInput'

class ReviewFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      overall_rating: null,
      body: '',
      food_rating: null,
      atmosphere_rating: null,
      shows_rating: null,
      staff_rating: null,
      price_rating: null,
      rides_rating: null,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateOverallRatingEntry = this.validateOverallRatingEntry.bind(this)
  }

  handleChange(event){
    if (event.target.name == "overall_rating") {
      this.validateOverallRatingEntry(event.target.value)
    }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()

    if (this.validateOverallRatingEntry(this.state.overall_rating)){
      let newReview = {
        overall_rating: this.state.overall_rating,
        amusement_park_id: this.props.id,
        food_rating: this.state.food_rating,
        atmosphere_rating: this.state.atmosphere_rating,
        shows_rating: this.state.shows_rating,
        staff_rating: this.state.staff_rating,
        price_rating: this.state.price_rating,
        rides_rating: this.state.rides_rating,
        body: this.state.body
      }

      this.props.postReview(newReview)
      this.handleClear()
    }
  }

  handleClear(){
    this.setState({
      overall_rating: null,
      body: '',
      food_rating: null,
      atmosphere_rating: null,
      shows_rating: null,
      rides_rating: null,
      staff_rating: null,
      price_rating: null,
      errors: {}
    })
  }

  validateOverallRatingEntry(entry) {

    if (!entry) {
      let newError = { overallRating: 'You must make an overall rating'}
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.overallRating
      this.setState({ errors: errorState })
      return true
    }
  }

  render(){
    let errorDiv
    let errorItems
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form id="review-form" className="callout row wrapper" onSubmit={this.handleSubmit}>
        <h1>New Review</h1>
        {errorDiv}
        <ReviewFormInput
          content={this.state.overall_rating}
          handlerFunction={this.handleChange}
          id="overall_rating"
          name="overall_rating"
          label="Overall Rating"
          type="select"
          checked={this.state.overallChecked}
        />
        <ReviewFormInput
          content={this.state.rides_rating}
          handlerFunction={this.handleChange}
          id="rides_rating"
          name="rides_rating"
          label="Rides"
          type="select"
        />
        <ReviewFormInput
          content={this.state.food_rating}
          handlerFunction={this.handleChange}
          id="food_rating"
          name="food_rating"
          label="Food"
          type="select"
          checked={this.state.foodChecked}
        />
        <ReviewFormInput
          content={this.state.shows_rating}
          handlerFunction={this.handleChange}
          id="shows_rating"
          name="shows_rating"
          label="Shows"
          type="select"
        />
        <ReviewFormInput
          content={this.state.atmosphere_rating}
          handlerFunction={this.handleChange}
          id="atmosphere_rating"
          name="atmosphere_rating"
          label="Atmosphere"
          type="select"
        />
        <ReviewFormInput
          content={this.state.staff_rating}
          handlerFunction={this.handleChange}
          id="staff_rating"
          name="staff_rating"
          label="Staff"
          type="select"
        />
        <ReviewFormInput
          content={this.state.price_rating}
          handlerFunction={this.handleChange}
          id="price_rating"
          name="price_rating"
          label="Price"
          type="select"
        />
        <ReviewFormInput
          content={this.state.body}
          handlerFunction={this.handleChange}
          id="body"
          name="body"
          label="Comment"
          type="textarea"
        />
      <button type="submit" className="button medium snip1582" value="Submit">Add Review</button>
      </form>
    )
  }
}

export default ReviewFormContainer
