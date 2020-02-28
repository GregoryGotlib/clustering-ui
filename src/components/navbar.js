import React, { Component } from "react";
import '../style/navbar.css';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Clustering App</a>
      </nav>
    );
  }
}
