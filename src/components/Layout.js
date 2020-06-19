import React, { Component } from "react";

import Header from "./header-navbar/header";
import Navbar from "./header-navbar/navbar";
import SignIn from "./auth/signin";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Navbar />
        <SignIn />
      </div>
    );
  }
}
