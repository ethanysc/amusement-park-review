import React from 'react';


import RideTile from '../components/RideTile'

class RidesIndexContainer extends React.Component {
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

export default RidesIndexContainer;
