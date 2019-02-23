import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, InputGroup, Input, Button} from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard') // push user to dashboard when they login
    }
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

      const userData = {
            email: this.state.email,
            password: this.state.password
      };
      this.props.loginUser(userData);
  };

  render() {
      const { errors } = this.state;
  return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3">
            <div className="card mx-auto my-5">
                  <div className="card-header">
                        <h1>Login</h1>
                  </div>
                  <div className="card-body">
                  <Form noValidate onSubmit={this.onSubmit}>
              <FormGroup>
                <InputGroup>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                  <Input
                    className="form-control"
                    placeholder="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                  />
                </InputGroup>
                <span className="red-text">{errors.email}</span>
            </FormGroup>
            <FormGroup>
                <InputGroup>
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-asterisk"></i>
                    </span>
                  </div>
                  <Input
                    className="form-control"
                    id="password" type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                  />
                </InputGroup>
                <span className="red-text">{errors.password}</span>
            </FormGroup>
              <div className="form-group form-actions">
                <Button className="btn btn-sm btn-success" type="submit">Login</Button>
              </div>
            </Form>
                  </div>
                  <div className="card-footer">
                  <Link to="/">
                       Back to home
                  </Link>
                  <p className="grey-text text-darken-1">
                      Don't have an account? <Link to="/register">Register</Link>
                  </p>
                  </div>
                </div>
            </div>
          </div>

        </div>
      );
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);