import React from 'react'
import {Link} from 'react-router-dom'

const UserSidebar = props => {
    return (
        <div className="collection col s2">
            <h4>{props.user}</h4>
            <Link to="/" className="collection-item">Home</Link>
            <a href="#!" className="collection-item">Bio</a>
            <Link to="/mypods" className="collection-item">My Pods</Link>
            <a href="#!" className="collection-item">Create Pod</a>
            <a href="#!" className="collection-item">Search Pods</a>
        </div>
    )
}

export default UserSidebar;