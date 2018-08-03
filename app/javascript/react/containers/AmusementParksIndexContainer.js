import React from 'react'

import ParkIndexTile from '../components/ParkIndexTile'
import NewAmusementParkLink from '../components/NewAmusementParkLink'

class AmusementParksIndexContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      amusementParks: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/amusement_parks')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(resp => {
      this.setState({
        amusementParks: resp.amusement_parks
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  render(){
    let amusementParks = ''
    if (this.state.amusementParks.length != 0){
      amusementParks = this.state.amusementParks.map((park) => {
        return(
          <ParkIndexTile
            id={park.id}
            key={park.id}
            name={park.name}
            image={park.park_photo}
          />
        )
      })
    }

    return(
      <div className="row wrapper">
        <h1 className="row wrapper title" id="title-home">Amusement Park Reviews</h1>
        {amusementParks}
        <NewAmusementParkLink />
      </div>
    )
  }
}

export default AmusementParksIndexContainer;
