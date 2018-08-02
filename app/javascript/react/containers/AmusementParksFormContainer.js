import React from 'react';
import { browserHistory } from 'react-router'
import Dropzone from 'react-dropzone'

import AmusementParkFormInput from '../components/AmusementParkFormInput';

class AmusementParksFormContainer extends React.Component {
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
      errors: {},
      file: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEntry = this.validateEntry.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postAmusementPark = this.postAmusementPark.bind(this);
    this.onDrop = this.onDrop.bind(this);
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
      errors: {},
      file: []
    });
  }

  handleSubmit(event){
    event.preventDefault();
    Object.keys(this.state).forEach(key => {
      if (key != "errors" && key != "description" && key != "file") {
        this.validateEntry(key, this.state[key])
      }
    })
    if (Object.keys(this.state.errors).length == 0){
      let newAmusementPark = new FormData();
      newAmusementPark.append("name", this.state.name);
      newAmusementPark.append("address", this.state.address);
      newAmusementPark.append("city", this.state.city);
      newAmusementPark.append("state", this.state.state);
      newAmusementPark.append("zipcode", this.state.zipcode);
      newAmusementPark.append("phone_number", this.state.phone_number);
      newAmusementPark.append("website", this.state.website);
      newAmusementPark.append("operating_season", this.state.operating_season);
      newAmusementPark.append("description", this.state.description);
      newAmusementPark.append("park_photo", this.state.file[0])

      this.postAmusementPark(newAmusementPark);
      this.handleClear();
    }
  }

  postAmusementPark(payload){
   fetch('/api/v1/amusement_parks.json', {
     credentials: 'same-origin',
     method: 'POST',
     body: payload
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
     .then(body => browserHistory.push(`/amusement_parks/${body.amusementPark.id}`))
     .catch(error => console.error(`Error in fetch: ${error.message}`));
 }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ file: file })
    } else {
      let newError = { picture: `You can only upload one photo per amusement park.`};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      // this.setState({ message: 'You can only upload one photo per board game.'})
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
          <h1>Add new Amusement Park</h1>
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
          <section>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop}>
                <p>Try dropping some files here, or click to select files to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <h2>Dropped files</h2>
              <ul>
                {
                  this.state.file.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>
          <input type="submit" className="button" value="Submit" />
        </form>
    )
  }
}

export default AmusementParksFormContainer;
