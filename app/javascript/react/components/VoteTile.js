import React from 'react';

const VoteTile = props => {
  return(
    <div>
      <button name="like" onClick={props.onClick} className={props.buttonClass}>
        Like
      </button>
       Likes: {props.likes}
      <button onClick={props.onClick} name="dislike" className={props.buttonClass}>
        Dislike
      </button>
       Dislikes: {props.dislikes}
    </div>
  )
}


export default VoteTile;
