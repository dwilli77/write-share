import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import StaticSidebar from './components/StaticSidebar'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  state = {
    user: ""
  }

  handleNewUser = event => {
    event.preventDefault();
    console.log('this ran => create new user');
  }

  handleLogin

  render() {
    return (
      <Router>
        <>
        <Navbar user={this.state.user}/>
        <div className="row content-area">
          <div className="col s10">
          <Route exact path="/" render={this.state.user ? props => <Dashboard {...props} user={this.state.user}/> : Welcome} />
          <Route exact path="/register" render={props => <Register onClick={this.handleNewUser} />} />
          <Route exact path="/login" component={Login} />
          </div>
          <StaticSidebar />
        </div>
        </>
      </Router>
    );
  }
}

export default App;
