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
                            <UserSidebar user={context.currentUser} />
                            <p className="col s10">
                                this will be the main dashboard
                            </p>
                        </>
                    )}}
            </AppContext.Consumer>
        )
    }
}

export default Dashboard;