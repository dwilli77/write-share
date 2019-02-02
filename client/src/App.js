import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import StaticSidebar from './components/StaticSidebar'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="row content-area">
          <div className="col s9"></div>
          <StaticSidebar />
        </div>
      </>
    );
  }
}

export default App;
