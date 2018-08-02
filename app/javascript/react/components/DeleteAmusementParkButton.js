import React from 'react'
import { Link } from 'react-router'

const DeleteAmusementParkButton = props => {
  let onClickAction = () => {
    if (window.confirm('Are you sure you want to delete this Amusement Park?')) {
      props.deleteAmusementPark()
    }
  }
  return(
    <button className="button snip1582" onClick={onClickAction}>
      Delete
    </button>
  )
}

export default DeleteAmusementParkButton
