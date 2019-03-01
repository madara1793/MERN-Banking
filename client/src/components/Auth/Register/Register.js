import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, InputGroup, Input, Button} from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/panel");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };

  onSubmit = e => {
      e.preventDefault();

      const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
      };
      this.props.registerUser(newUser, this.props.history);
  };

  render() {
      const { errors } = this.state;
  return (
        <div className="container">
             <div className="row">
            <div className="col-md-6 offset-3 my-5">
              <div className="card">
                  <div className="card-header">
                      <h1>Register</h1>
                  </div>
                  <div className="card-body">
                  <Form noValidate onSubmit={this.onSubmit}>
                    <FormGroup>
                      <InputGroup>
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user"></i>
                            </span>
                          </div>
                          <Input
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.name}
                            error={errors.name}
                            id="name"
                            type="text"
                            placeholder="Name"
                          />
                        </InputGroup>
                        <span className="red-text">{errors.name}</span>
                  </FormGroup>
                <FormGroup>
                    <InputGroup>
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user"></i>
                            </span>
                          </div>
                          <Input
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                    </InputGroup>
                    <span className="red-text">{errors.email}</span>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <Input
                          className="form-control"
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          placeholder="Password"
                        />
                    </InputGroup>
                      <span className="red-text">{errors.password}</span>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-user"></i>
                            </span>
                          </div>
                          <Input
                            className="form-control"
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                            id="password2"
                            type="password"
                            placeholder="Confirm password"
                          />
                    </InputGroup>
                  <span className="red-text">{errors.password2}</span>
                </FormGroup>
                <div className="form-group form-actions">
                        <Button className="btn btn-sm btn-success" type="submit">Register</Button>
                </div>
              </Form>
            </div>
            <div className="card-footer">
            <Link to="/" className="btn-default">
                Back to home
            </Link>
            <p className="text-dark">
                  Already have an account? <Link to="/login">Log in</Link>
            </p>
            </div>
              </div>
            </div>
        </div>
      </div>
      );
    }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));