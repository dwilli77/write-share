import React from 'react'

const UserSidebar = props => {
    return (
        <div className="collection col s2">
            <h4>{props.user}</h4>
            <a href="#!" className="collection-item">Home</a>
            <a href="#!" className="collection-item">Bio</a>
            <a href="#!" className="collection-item">My Pods</a>
            <a href="#!" className="collection-item">Create Pod</a>
            <a href="#!" className="collection-item">Search Pods</a>
            <a href="#!" className="collection-item">Notes</a>
        </div>
    )
}

export default UserSidebar;