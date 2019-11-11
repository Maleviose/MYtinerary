import React, { Component } from "react";
import logoMI from "../assets/images/MYtineraryLogo.png";


export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={logoMI} className="logoSized" alt="logo"></img>
      </div>
    );
  }
}
