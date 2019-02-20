import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
export default class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <div className="sidebar d-flex flex-column justify-content-start">
            <ul className="nav-list">
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/dashboard">
                    <span><i className="fa fa-home mr-2"></i></span>
                    Dashboard</NavLink>
                </li>
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/account">
                    <span><i className="fa fa-user mr-2"></i></span>
                    Account</NavLink>
                </li>
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/transactions">
                    <span><i className="fas fa-exchange-alt mr-2"></i></span>
                    Transactions</NavLink>
                </li>
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/converter">
                    <span><i className="fas fa-pound-sign mr-2"></i></span>
                    Converter</NavLink>
                </li>
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/settings">
                    <span><i className="fa fa-cogs mr-2"></i></span>
                    Settings</NavLink>
                </li>
                <li className="nav-item py-3 px-3">
                    <NavLink className="nav-link" to="/messages">
                    <span><i className="fa fa-comment mr-2"></i></span>
                    Messages</NavLink>
                </li>
            </ul>
        </div>

      </SidebarWrapper>
    )
  }
}

const SidebarWrapper = styled.div`
  .sidebar {
    background-color: #1e8af8;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    .nav-list {
      list-style: none;
    }
    height: 100%;
    li {
      color: #fff;
      .nav-link {
        text-decoration: none;
        color: #fff;
      }
    }
  }

`;