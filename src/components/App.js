import React, { Component } from 'react';

//components
import '../app.css';
import '../index.css';

import Search from '../containers/search';
import ListofCars from '../containers/list_of_Cars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <br />
          <h2>Welcome to Redux Intermediate App</h2>
          <br />
          <Search />
        </div>
        <div >
          <ListofCars />
        </div>
      </div>
    );
  }
}

export default App;
