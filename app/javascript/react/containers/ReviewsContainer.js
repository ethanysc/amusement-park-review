import React from 'react';

class ReviewsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    let reviews = this.props.reviews.map((review) => {
      return(
        < ReviewTile
          id={review.id}
          review={review}
        />
      )
    })
    return(
      <div>
        {review}
      </div>
    )
  }
}
