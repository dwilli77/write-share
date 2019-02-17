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
                                <h4>Hi {context.currentUser}! Welcome to Write Share!</h4>
                                <p>Search, Create, and Navigate Pods on the left sidebar</p>
                                <h5>It's your turn in these Pods!</h5>

                            </div>
                        </>
                    )}}
            </AppContext.Consumer>
        )
    }
}

export default Dashboard;