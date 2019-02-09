import React from 'react'
import MyPodsTable from '../../components/MyPodsTable'
import UserSidebar from '../../components/UserSidebar'

class MyPods extends React.Component {
    
    render(){
    return (
        <>
            <UserSidebar />
            <nav className="col s10" id="my-pod-searchbar">
                <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                    <input id="search" type="search" placeholder="Search My Pods" required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>

            <MyPodsTable pods={[{name: "test", id:1, topic:"test123", active_participant:"Derek"}]} />
        </>
    )
    }
}

export default MyPods;