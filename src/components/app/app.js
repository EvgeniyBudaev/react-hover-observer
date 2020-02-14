import React, { Component} from 'react';
import Cursor from '../cursor';
import './app.css';
import HomePage  from '../pages/home-page';

class App extends Component {
  render() {
    return (
      <div>
        <Cursor />
        <HomePage />
      </div>
    )
  };
};

export default App;