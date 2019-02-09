import React from 'react'
import {Link} from 'react-router-dom'

const UserSidebar = props => {
    return (
        <div className="collection col s2">
            <h4>{props.user}</h4>
            <a href="#!" className="collection-item">Home</a>
            <a href="#!" className="collection-item">Bio</a>
            <Link to="/mypods" className="collection-item">My Pods</Link>
            <a href="#!" className="collection-item">Create Pod</a>
            <a href="#!" className="collection-item">Search Pods</a>
            <a href="#!" className="collection-item">Notes</a>
        </div>
    )
}

export default UserSidebar;