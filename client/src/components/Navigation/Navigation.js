import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Badge  } from 'reactstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../Modal/Search';
class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand>
              <Link className="text-white text-decoration-none text-uppercase" to="/account">
                {user.name}
              </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                    <Search/>
              </NavItem>
              <NavItem>
                    <Button color="transparent">
                        <i style={{color: '#fff', position: 'relative'}} className="fa fa-bell"></i>
                        <Badge style={{position: 'absolute', top: '.3rem', right: '13.5%'}} color="danger">4</Badge>
                    </Button>
              </NavItem>
              <NavItem>
                    <Button color="transparent">
                        <i style={{color: '#fff'}} className="fa fa-envelope"></i>
                        <Badge style={{position: 'absolute', top: '.3rem', right: '10.5%'}} color="info">8</Badge>
                    </Button>
              </NavItem>
              <NavItem>
                <NavLink href="/account">
                    <img className="img-fluid rounded-circle" src="https://via.placeholder.com/30C/O https://placeholder.com/" alt="Avatar"/>
                </NavLink>
              </NavItem>
              <NavItem>
                    <Button color="danger" onClick={this.onLogoutClick}>Logout</Button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logoutUser})(Navigation)