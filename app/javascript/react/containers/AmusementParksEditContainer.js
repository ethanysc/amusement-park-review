import React from 'react';
import AmusementParkFormInput from '../components/AmusementParkFormInput';
import { browserHistory } from 'react-router'

class AmusementParksEditContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone_number: "",
      website: "",
      operating_season: "",
      description: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEntry = this.validateEntry.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postEditedAmusementPark = this.postEditedAmusementPark.bind(this);
  }

  handleChange(event){
    if (event.target.name != "description") {
      this.validateEntry(event.target.name, event.target.value);
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateEntry(name, fieldValue){
    if (fieldValue.trim() === '') {
      let newError = { [name]: `You must enter a ${name}`};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState[name];
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleClear(){
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      phone_number: "",
      website: "",
      operating_season: "",
      description: "",
      errors: {}
    });
  }

  handleSubmit(event){
    event.preventDefault();
    Object.keys(this.state).forEach(key => {
      if (key != "errors" && key != "description") {
        this.validateEntry(key, this.state[key])
      }
    })

    if (Object.keys(this.state.errors).length == 0){
      let newAmusementPark = {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode,
        phone_number: this.state.phone_number,
        website: this.state.website,
        operating_season: this.state.operating_season,
        description: this.state.description
      };
      this.postEditedAmusementPark(newAmusementPark);

      this.handleClear();
    }
  }

  componentDidMount(){
    fetch(`/api/v1/amusement_parks/${this.props.params.id}.json`, {
      credentials: 'same-origin'})
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
        name: body.amusement_park.name,
        address: body.amusement_park.address,
        city: body.amusement_park.city,
        state: body.amusement_park.state,
        zipcode: body.amusement_park.zipcode,
        phone_number: body.amusement_park.phone_number,
        website: body.amusement_park.website,
        operating_season: body.amusement_park.operating_season,
        description: body.amusement_park.description
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  postEditedAmusementPark(payload){
   fetch(`/api/v1/amusement_parks/${this.props.params.id}.json`, {
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json',
     'X-Requested-With': 'XHMLttpRequest' },
     method: 'PATCH',
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
     .then(body => browserHistory.push(`/amusement_parks/${this.props.params.id}`))
     .catch(error => console.error(`Error in fetch: ${error.message}`));
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
          <h1>Edit Amusement Park</h1>
          {errorDiv}

          <AmusementParkFormInput
            name="name"
            label="Name"
            content={this.state.name}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="address"
            label="Address"
            content={this.state.address}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="city"
            label="City"
            content={this.state.city}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="state"
            label="State"
            content={this.state.state}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="zipcode"
            label="Zip Code"
            content={this.state.zipcode}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="phone_number"
            label="Phone Number"
            content={this.state.phone_number}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="website"
            label="Website"
            content={this.state.website}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="operating_season"
            label="Operating Season"
            content={this.state.operating_season}
            handlerFunction={this.handleChange}
          />
          <AmusementParkFormInput
            name="description"
            label="Description"
            content={this.state.description}
            handlerFunction={this.handleChange}
          />
          <input type="submit" className="button" value="Submit" />
        </form>
    )
  }
}

export default AmusementParksEditContainer;
