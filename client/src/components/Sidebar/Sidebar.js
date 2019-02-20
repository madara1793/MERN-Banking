import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Sidebar extends Component {
  render() {
    return (
      <aside>
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
                  <Link to="/converter">Convarter</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/settings">Settings</Link>
              </li>
              <li className="nav-item px-3">
                  <Link to="/messages">Messages</Link>
              </li>
            </ul>
      </aside>
    )
  }
}
