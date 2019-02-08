import React from 'react';

const AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        currentUser: ""
    }

    handleLogin = (email,password) => {
        // api call to log in user => send back the username

        // .then(res => {
        //     this.setState({user: res.username})
        // })
        console.log(email,password)
        this.setState({currentUser: email})
    }

    handleLogout = () => {
        this.setState({currentUser: ""})
        console.log(this.state.currentUser)
    }

    render() {
        return (
            <AppContext.Provider value={{
                currentUser: this.state.currentUser,
                handleLogin: this.handleLogin,
                handleLogout: this.handlelogout
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppProvider, AppContext } ;