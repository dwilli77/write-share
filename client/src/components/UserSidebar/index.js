import React from 'react'
import {Link} from 'react-router-dom'

const UserSidebar = props => {
    return (
        <div className="collection col s2">
            <h4>{props.user}</h4>
            <Link to="/" className="collection-item">Home</Link>
            <a href="#!" className="collection-item">Bio</a>
            <Link to="/mypods" className="collection-item">My Pods</Link>
            <Link to="/create" className="collection-item">Create Pod</Link>
            <a href="#!" className="collection-item">Search Pods</a>
        </div>
    )
}

export default UserSidebar;