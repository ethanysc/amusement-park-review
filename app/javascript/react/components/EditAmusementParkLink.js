import React from 'react'
import { Link } from 'react-router'

const EditAmusementParkLink = props => {
  return(
    <Link to={`/amusement_parks/${props.id}/edit`}>Edit</Link>
  )
}

export default EditAmusementParkLink
