import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="container mx-auto">
          <h1 className="text-center">Welcome to MERN Banking</h1>
          <Link to="/login"className="btn btn-primary">Login</Link>
      </div>
    );
  }
}

export default Landing;