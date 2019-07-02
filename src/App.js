import React, { Component } from 'react';
import Navbar from './components/navbar';
import Books from './pages/books';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Books></Books>
      </div>
    )
  }
}

export default App;
