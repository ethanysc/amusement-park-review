import React from 'react'

const ReviewFormInput = props => {
  let inputDiv;
  if(props.type == "select") {
    inputDiv = <div>
      <select name={props.name} value={props.content || ''} onChange={props.handlerFunction}>
        <option value='default'>-</option>
        <option value='5'>5</option>
        <option value='4'>4</option>
        <option value='3'>3</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
      </select>
    </div>
  } else {
    inputDiv = <textarea type="text" id={props.id} name={props.name} value={props.content} onChange={props.handlerFunction}/>
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      {inputDiv}
    </div>
  )
}

export default ReviewFormInput
