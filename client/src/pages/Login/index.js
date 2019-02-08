import React from 'react'


const Login = props => {
    return (
        <>
            <div className="container login-form">
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">computer</i>
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="material-icons prefix">perm_identity</i>
                        <input id="password1" type="password" className="validate" />
                        <label for="password1">Password</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light btn-large right" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                </button>
            </div>
        </>
    )
}

export default Login;