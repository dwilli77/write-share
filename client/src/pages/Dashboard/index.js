import React from 'react'
import UserSidebar from '../../components/UserSidebar'

class Dashboard extends React.Component {

    render(){
        return (
            <>
                <UserSidebar />
                <p className="col s8">
                    this will be the main dashboard
                </p>
            </>
        )
    }
}

export default Dashboard;