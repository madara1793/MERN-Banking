import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <div className="container mx-auto">
          <Jumbotron className="mt-5">
              <h1 className="display-3">Hello from MERN Banking</h1>
              <p className="lead">This is a simple Banking app that allows you to track your account activity, make transactions, send messages and check currency exchange rates. All data is stored in database, currency exchange rates provided via external API.</p>
              <hr className="my-2" />
              <p>Please click below to login</p>
              <p className="lead">
                <Link to="/login" className="btn btn-primary btn-lg">Login</Link>
              </p>
          </Jumbotron>
      </div>
    );
  }
}

export default Landing;