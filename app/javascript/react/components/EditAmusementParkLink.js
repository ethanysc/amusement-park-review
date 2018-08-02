import React from 'react'
import { Link } from 'react-router'

const EditAmusementParkLink = props => {
  return(
    <Link to={`/amusement_parks/${props.id}/edit`}>
      <button className="button snip1582">
        Edit
      </button>
    </Link>
  )
}

export default EditAmusementParkLink
