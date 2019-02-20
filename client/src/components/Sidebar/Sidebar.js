import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper className="sidebar">
           <ul className="nav navbar-nav d-md-down-none">
              <li className="nav-item px-3">
                  <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/account">Account</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/transactions">Transactions</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/converter">Converter</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/settings">Settings</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/messages">Messages</Link>
              </li>
            </ul>
      </SidebarWrapper>
    )
  }
}

const SidebarWrapper = styled.div`
  .sidebar {
    background-color: #1e8af8;
    width: 20%;
    height: 100vh;
  }

`;