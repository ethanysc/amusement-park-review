import React from 'react';

const RideReviewFormInput = props => {

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <select name={props.name} value={props.content || ''} onChange={props.handlerFunction}>
        <option value='default'>-</option>
        <option value='5'>5</option>
        <option value='4'>4</option>
        <option value='3'>3</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
      </select>
    </div>
  )
}

export default RideReviewFormInput
