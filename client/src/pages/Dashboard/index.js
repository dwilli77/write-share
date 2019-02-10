import React from 'react'
import UserSidebar from '../../components/UserSidebar'
import {AppContext} from '../../Context'


class Dashboard extends React.Component {

    render(){
        return (
            <AppContext.Consumer>
                {(context) => {
                    return(
                        <>
                            <UserSidebar />
                            <div className="col s10">
                                <h4>This is my Dashboard</h4>
                            </div>
                        </>
                    )}}
            </AppContext.Consumer>
        )
    }
}

export default Dashboard;