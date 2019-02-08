import React from 'react'

const UserSidebar = props => {
    return (
        <div class="collection col s2">
            <h4>{props.user}</h4>
            <a href="#!" class="collection-item">Home</a>
            <a href="#!" class="collection-item">Bio</a>
            <a href="#!" class="collection-item">My Pods</a>
            <a href="#!" class="collection-item">Create Pod</a>
            <a href="#!" class="collection-item">Search Pods</a>
            <a href="#!" class="collection-item">Notes</a>
        </div>
    )
}

export default UserSidebar;