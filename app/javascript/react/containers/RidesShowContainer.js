import React from 'react';


import RideShowTile from '../components/RideShowTile'

class RidesShowContainer extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    let rides = this.props.rides.map((ride) => {
      return(
        <RideTile
          key={ride.id}
          id={ride.id}
          name={ride.name}
        />
      )
    })
    return(
      <div>
        {rides}
      </div>
    )
  }
}

export default RidesShowContainer;
