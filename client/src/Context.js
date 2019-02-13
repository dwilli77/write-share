import React from 'react';
import API from './utils/API'

const AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        currentUser: "",
        currentUserId: null,
        failValidation:false
    }

    handleNewPod = (userId, name, topic, numParticipants) => {
        console.log('this will create a new pod')
        console.log(userId, name, topic, numParticipants);
        // API post request to make a new pod
        API.createPod({
            topic: topic,
            name: name,
            creator: this.state.currentUser,
            numParticipants: numParticipants,
            activeParticipant: this.state.currentUser,
            totalParticipants: [this.state.currentUser]

        }).then(res => {
            console.log('pod created')
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleRegister = (email, username, password,about_me) => {
        console.log('this ran');
        
        API.register({
            email: email,
            username: username,
            password: password,
            aboutMe: about_me
        }).then(res => {
            console.log(res)
            if (res.status === 200 && res.data !== 'user already exists'){
                this.setState({currentUser: res.data.username,currentUserId:res.data._id, failValidation: false})
            } else {
                console.log("couldn't log in")
            }
        }).catch(err=> console.log(err))
    }

    handleLogin = (email,password) => {
        API.login({
            email: email,
            password: password
        })
        .then(res => {
            console.log(res)
            if (res.data === 'no user' || res.data === 'incorrect password') {
                return;
            }else{
                this.setState({currentUser: res.data.username, currentUserId:res.data._id})
            }
        })
        .catch(err => console.log(err))
    }

    handleLogout = () => {
        console.log('this ran')
        this.setState({currentUser: ""})
    }

    render() {
        return (
            <AppContext.Provider value={{
                currentUser: this.state.currentUser,
                currentUserId: this.state.currentUserId,
                handleLogin: this.handleLogin,
                handleLogout: this.handleLogout,
                handleRegister: this.handleRegister,
                handleNewPod: this.handleNewPod
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export { AppProvider, AppContext } ;