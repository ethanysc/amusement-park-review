import React from 'react'
import ReviewFormInput from '../components/ReviewFormInput'

class ReviewFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      overall_rating: -1,
      body: '',
      food_rating: -1,
      atmosphere_rating: -1,
      shows_rating: -1,
      staff_rating: -1,
      price_rating: -1,
      rides_rating: -1,
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
    this.setState({ [event.target.name]: event.target.value })
    debugger
  }

  handleSubmit(event){
    event.preventDefault()
    let newReview = {

    }
  }

  handleClear(){
    this.setState({
      overall_rating: -1,
      body: '',
      food_rating: -1,
      atmosphere_rating: -1,
      shows_rating: -1,
      staff_rating: -1,
      price_rating: -1
    })
  }

  validateOverallRatingEntry(entry) {
    if (entry.trim() === '') {
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
    debugger
    let errorDiv
    let errorItems
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
      <form className="callout" onSubmit={this.handleSubmit}>
        <h1>New Review</h1>
        {errorDiv}
        <ReviewFormInput
          content={this.state.overall_rating}
          handlerFunction={this.handleChange}
          id="overall_rating"
          name="overall_rating"
          label="Overall Rating"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.rides_rating}
          handlerFunction={this.handleChange}
          id="rides_rating"
          name="rides_rating"
          label="Rides"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.food_rating}
          handlerFunction={this.handleChange}
          id="food_rating"
          name="food_rating"
          label="Food"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.shows_rating}
          handlerFunction={this.handleChange}
          id="shows_rating"
          name="shows_rating"
          label="Shows"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.atmosphere_rating}
          handlerFunction={this.handleChange}
          id="atmosphere_rating"
          name="atmosphere_rating"
          label="Atmosphere"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.staff_rating}
          handlerFunction={this.handleChange}
          id="staff_rating"
          name="staff_rating"
          label="Staff"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.price_rating}
          handlerFunction={this.handleChange}
          id="price_rating"
          name="price_rating"
          label="Price"
          type="radio"
        />
        <ReviewFormInput
          content={this.state.body}
          handlerFunction={this.handleChange}
          id="body"
          name="body"
          label="Comment"
          type="textarea"
        />
        <input type="submit" className="button" value="Submit" />
      </form>
    )
  }
}

export default ReviewFormContainer
