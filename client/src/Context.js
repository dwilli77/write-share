import React from 'react';

const AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        currentUser: "",
        currentUserId: null
    }

    handleLogin = (email,password) => {
        // api call to log in user => send back the username

        // .then(res => {
        //     this.setState({user: res.username})
        // })
        console.log(email,password)
        this.setState({currentUser: email, currentUserId:1})
    }

    handleLogout = () => {
        console.log('this ran')
        this.setState({currentUser: ""})
    }

    render() {
        return (
            <AppContext.Provider value={{
                currentUser: this.state.currentUser,
                handleLogin: this.handleLogin,
                handleLogout: this.handleLogout
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppProvider, AppContext } ;