import React from 'react';
import RideReviewFormInput from '../components/RideReviewFormInput';

class RideReviewFormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rating: null,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateRatingEntry = this.validateRatingEntry.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    if (event.target.name == "rating") {
      this.validateRatingEntry(event.target.value);
    }
    this.setState({
      rating: event.target.value
    });
  }

  validateRatingEntry(entry){
    if (!entry) {
      let newError = { rating: 'You must enter a ride rating'};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.rating;
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleClear(){
    this.setState({
      rating: null,
      errors: {}
    });
  }

  handleSubmit(event){
    event.preventDefault();

    if (this.validateRatingEntry(this.state.rating)){
      let newRideReview = {
        rating: this.state.rating,
        rideId: this.props.id
      };
      this.props.postRideReview(newRideReview);

      this.handleClear();
    }
  }

  render(){
    let errorDiv;

    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return(
        <form className="callout" onSubmit={this.handleSubmit}>
          <h1>Add new Ride Review</h1>
          {errorDiv}

          <RideReviewFormInput
            name="rating"
            label="Ride Rating"
            content={this.state.rating}
            handlerFunction={this.handleChange}
          />

          <input type="submit" className="button" value="Submit" />
        </form>
    )
  }
}

export default RideReviewFormContainer;
