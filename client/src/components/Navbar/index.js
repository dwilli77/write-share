import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul className="right">
          {!props.user ? (
            <>
            <li><Link to="/register" className="waves-effect waves-light btn">Register</Link></li>
            <li><Link id="login-button" to="/login" className="waves-effect waves-light btn">Login</Link></li>
            </>
          ):(
            <li><Link to="/" id="logout-button" className="waves-effect waves-light btn" >Log Out</Link></li>
          )}
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar;