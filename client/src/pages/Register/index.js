import React from 'react';
import { AppContext } from '../../Context';


class Register extends React.Component {
    state = {
        email: "",
        username: "",
        password: "",
        password2: "",
        about_me: "",
    }

    checkInputs = () => {
        return this.state.password.length > 5 && 
        this.state.password === this.state.password2 &&
        this.state.username.length > 0 &&
        this.state.email.length > 4
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
            {value=> {
                const {handleRegister} = value;
                return (
        <div className="container">
            <div className="row">
                <h4>New User Registration</h4>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">computer</i>
                            <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_box</i>
                            <input id="username" type="text" className="validate" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                            <input id="password1" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                            <label htmlFor="password1">Password (6 character minimum)</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                            <input id="password2" type="password" className="validate" name="password2" value={this.state.password2} onChange={this.handleInputChange}/>
                            <label htmlFor="password2">Re-Enter Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" className="materialize-textarea" name="about_me" value={this.state.about_me} onChange={this.handleInputChange}></textarea>
                                    <label htmlFor="icon_prefix2">About Me...</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button disabled={!this.checkInputs()} className="btn waves-effect waves-light btn-large right"   onClick={() => handleRegister(this.state.email,this.state.username, this.state.password,this.state.about_me)} >Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
                )
        }}
        </AppContext.Consumer>
    )
    }
}

export default Register;