import React from 'react';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

export default class MessagesDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <DropdownWrapper>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="btn-group pull-right top-head-dropdown">
              <button style={{position: 'relative'}} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i style={{color: '#fff'}} className="fa fa-envelope"></i>
                <Badge style={{position: 'absolute', top: '0', right: '1rem'}} color="info">5</Badge>
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li className="top-text-block">
                    <div className="top-text-heading">You have just logged in</div>
                    <div className="top-text-light">2 minutes ago</div>
                </li>
                <li className="top-text-block">
                    <div className="top-text-heading">Password changed</div>
                    <div className="top-text-light">1 hours ago</div>
                </li>
                <li className="top-text-block">
                    <div className="top-text-heading">Profile picture uploaded successfully</div>
                    <div className="top-text-light">4 hours ago</div>
                </li>
                <li className="top-text-block">
                    <div className="top-text-heading">Assets specifications modified in themes</div>
                    <div className="top-text-light">4 hours ago</div>
                </li>
                <li className="top-text-block">
                    <div className="top-text-heading">Weekly report arrived</div>
                    <div className="top-text-light">5 hours ago</div>
                </li>
                <li>
                  <div className="loader-topbar"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DropdownWrapper>
    );
  }
}

const DropdownWrapper = styled.div`
.top-text-block{
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: inherit !important;
  border-bottom:1px solid #f4f4f4;
  position:relative;
  &:hover {
        &:before {
        content: '';
        width: 4px;
        background: #f05a1a;
        left: 0;
        top: 0;
        bottom: 0;
        position: absolute;
    }
  }
  &.unread {
    background:#ffc;

    // &:hover {
    //   background:#ffd;
    // }
  }

  .top-text-light {
    // color:#ccc;
    color: #999;
    font-size: 0.8em;
  }
}

.top-head-dropdown {
  .dropdown-menu {
   width: 350px;
    height:300px;
    overflow:auto;
  }

  li:last-child{
    .top-text-block {
      border-bottom:0;
    }
  }
}
.topbar-align-center {
  text-align: center;
}
.loader-topbar {
  margin: 5px auto;
  border: 3px solid #ddd;
  border-radius: 50%;
  border-top: 3px solid #666;
  width: 22px;
  height: 22px;
  -webkit-animation: spin-topbar 1s linear infinite;
  animation: spin-topbar 1s linear infinite;
}

@-webkit-keyframes spin-topbar {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin-topbar {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;