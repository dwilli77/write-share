import React from 'react'
import MyPodsTable from '../../components/MyPodsTable'
import UserSidebar from '../../components/UserSidebar'

class MyPods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userId: props.userId};
      }

    componentDidMount() {
        console.log(this.state.userId)
    }
    // API call to get all the pods associated with the current user, pass that array as props to the MyPodsTable, and the table will map over the array and use the information that it wants to display.
    
    render(){
    return (
        <>
            <UserSidebar />
            <div className="col s10">
            <div className="container">         
            <nav id="my-pod-searchbar">
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
            <h4>My Current Pods</h4>
            <MyPodsTable pods={[{name: "test", id:1, topic:"test123", active_participant:"Derek"}]} />
            </div>
            </div>
        </>
    )
    }
}

export default MyPods;