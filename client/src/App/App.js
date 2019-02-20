import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from '../components/layout/Landing/Landing';
import Login from '../components/Auth/Login/Login';
import Register from '../components/Auth/Register/Register';
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Dashboard from '../components/Panel/Dashboard';
import store from '../store';

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <React.Fragment>
              <Route exact path="/" component={ Landing }/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>

          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
