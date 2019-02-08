import React from 'react';


const Register = props => {
    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">computer</i>
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_box</i>
                            <input id="username" type="text" className="validate" />
                            <label for="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                            <input id="password1" type="password" className="validate" />
                            <label for="password1">Password</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">perm_identity</i>
                            <input id="password2" type="password" className="validate" />
                            <label for="password2">Re-Enter Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                    <label for="icon_prefix2">About Me...</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light btn-large right" type="submit" name="action" {...props}>Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;