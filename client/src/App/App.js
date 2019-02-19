import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../components/Navbar/Navigation';
import Landing from '../components/layout/Landing/Landing';

class App extends Component {
  render() {
    return (
     <div>
        <Navigation/>
        <Landing/>
     </div>
    );
  }
}

export default App;
