import React, { Component } from 'react';
import './App.css';
import {AppProvider, AppContext} from './Context'
import Navbar from './components/Navbar'
import StaticSidebar from './components/StaticSidebar'
import Welcome from './pages/Welcome'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <AppProvider>
          <Navbar />
          <div className="row content-area">
            <div className="col s10">
              <AppContext.Consumer>
                {({currentUser}) => (
                <Route exact path="/" component={currentUser ? Dashboard : Welcome} />
                )}
              </AppContext.Consumer>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <StaticSidebar />
          </div>
        </AppProvider>
      </Router>
    );
  }
}

export default App;
