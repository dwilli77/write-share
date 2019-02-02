import React from 'react';

const Navbar = props => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <ul className="right">
            <li><a href="/register" className="waves-effect waves-light btn">Register</a></li>
            <li><a href="/login" className="waves-effect waves-light btn">Login</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;