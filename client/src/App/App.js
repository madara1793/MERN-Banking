import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";

import Navigation from '../components/Navbar/Navigation';
import Landing from '../components/layout/Landing/Landing';
import Login from '../components/Auth/Login/Login';
import Register from '../components/Auth/Register/Register';

class App extends Component {
  render() {
    return (
     <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={ Landing }/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
     </div>
    );
  }
}

export default App;
