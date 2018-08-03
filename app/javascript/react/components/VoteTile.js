import React from 'react';

const VoteTile = props => {
  return(
    <div className="vote-tile">
      <button name="like" onClick={props.onClick} className={props.buttonClass} id="vote">
        <i className="fas fa-thumbs-up"></i>
      </button>
       Likes: {props.likes}
      <button onClick={props.onClick} name="dislike" className={props.buttonClass} id="vote">
        <i className="fas fa-thumbs-down"></i>
      </button>
       Dislikes: {props.dislikes}
    </div>
  )
}


export default VoteTile;
