import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <BackButton />
        <Link to='/'>Amusement Parks Home</Link>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}

export default NavBar;
