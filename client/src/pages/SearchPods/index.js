import React from 'react'
import UserSidebar from '../../components/UserSidebar'

const SearchPods = () => {
    return(
        <>
        <UserSidebar />
        <div className="col s10">
            <div className="container">
            <h4>Search for Writing Pods</h4>
            <nav className="col s12" id="pod-searchbar">
                <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="pod-search" type="search" placeholder="Search Pods Here" required />
                    <label className="label-icon" htmlFor="pod-search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
            <p>this doesn't do anything yet -- need to add an api call to search pods based on their name</p>
            <p>maybe have a table below that displays pods where totalParticipants.length {"<"} numParticipants</p>
            </div>
        </div>
        </>
    )
}

export default SearchPods;