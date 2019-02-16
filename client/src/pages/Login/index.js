import React from 'react'
import {AppContext} from '../../Context'


class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    render() {
    return (
        <AppContext.Consumer>
            {value => {
                const {handleLogin} = value;
                return(
                <div className="container login-form">
                    <div className="row">
                        <h4>Log In Here</h4>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">computer</i>
                            <input id="email" type="email" className="validate black-text" name="email" onChange={this.handleInputChange} value={this.state.email}/>
                            <label className="black-text" htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">perm_identity</i>
                            <input id="password1" type="password" name="password" className="validate black-text" onChange={this.handleInputChange} value={this.state.password}/>
                            <label className="black-text" htmlFor="password1">Password</label>
                        </div>
                    </div>
                    
                    <button className="btn waves-effect waves-light btn-large right main-button-font submit-button orange darken-3"  onClick={() => handleLogin(this.state.email,this.state.password)}>Submit
                            <i className="material-icons right">send</i>
                    </button>

                </div>
                )}}
        </AppContext.Consumer>
    )
    }
}

export default Login;