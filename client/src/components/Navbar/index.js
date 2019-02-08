import React from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../../Context'


const Navbar = props => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul className="right">
          <AppContext.Consumer>
          {value => {
            const {currentUser, handleLogout} = value;
            return !currentUser ? (
            <>
            <li><Link to="/register" className="waves-effect waves-light btn">Register</Link></li>
            <li><Link id="login-button" to="/login" className="waves-effect waves-light btn">Login</Link></li>
            </>
          ):(
            <li><a id="logout-button" onClick={handleLogout} className="waves-effect waves-light btn" href="#!">Log Out</a></li>
          )}}
          </AppContext.Consumer>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Navbar;