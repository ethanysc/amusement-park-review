import React from 'react'

const ReviewFormInput = props => {

  let inputDiv;
  if( props.type == "radio") {
    inputDiv = <div className="rating">
                  <span><input type="radio" name={props.name} id="str5" value="5" onClick={props.handlerFunction}/><label htmlFor="str5"></label></span>
                  <span><input type="radio" name={props.name} id="str4" value="4" onClick={props.handlerFunction}/><label htmlFor="str4"></label></span>
                  <span><input type="radio" name={props.name} id="str3" value="3" onClick={props.handlerFunction}/><label htmlFor="str3"></label></span>
                  <span><input type="radio" name={props.name} id="str2" value="2" onClick={props.handlerFunction}/><label htmlFor="str2"></label></span>
                  <span><input type="radio" name={props.name} id="str1" value="1" onClick={props.handlerFunction}/><label htmlFor="str1"></label></span>
              </div>
  } else {
    inputDiv = <input type="text" id={props.id} name={props.name} value={props.content} onChange={props.handlerFunction}/>
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      {inputDiv}
    </div>
  )
}

export default ReviewFormInput
