import React, { Component } from 'react';

class Layout extends Component {
   render() {
      return <main className="d-flex flex-row align-items-start justify-content-start">{this.props.children}</main>;
   }
}

export default Layout;
