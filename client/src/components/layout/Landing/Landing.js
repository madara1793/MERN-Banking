import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="container">
          <h1>Hello from Landing</h1>
          <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Landing;