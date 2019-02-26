import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { ListGroup, ListGroupItem } from 'reactstrap';
export default class Sidebar extends Component {

  render() {
    return (
      <SidebarWrapper>
        <div className="sidebar">
              <ListGroup>
                  <ListGroupItem className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                        <i className="fa fa-home mr-2"></i>
                        Dashboard
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem  className="nav-item">
                    <NavLink className="nav-link" to="/account">
                        <i className="fa fa-user mr-2"></i>
                        Account
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="nav-item">
                    <NavLink className="nav-link" to="/transactions">
                      <i className="fas fa-exchange-alt mr-2"></i>
                      Transactions
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="nav-item">
                    <NavLink className="nav-link" to="/converter">
                    <i className="fas fa-money-bill-alt mr-2"></i>
                      Converter
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="nav-item">
                    <NavLink className="nav-link" to="/settings">
                      <i className="fa fa-cogs mr-2"></i>
                      Settings
                    </NavLink>
                  </ListGroupItem>
                  <ListGroupItem className="nav-item">
                    <NavLink className="nav-link" to="/messages">
                      <i className="fa fa-comment mr-2"></i>
                      Messages
                    </NavLink>
                  </ListGroupItem>
              </ListGroup>
        </div>

      </SidebarWrapper>
    )
  }
}

const SidebarWrapper = styled.div`
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav-item {
  margin: 0;
  padding: 0;
  background-color: #000!important;
  border-bottom: 1px solid #999;
  .nav-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    color: #999;
    &:hover {
      background-color: #fff!important;
      color: #000!important;
    }
  }
}
}
`;