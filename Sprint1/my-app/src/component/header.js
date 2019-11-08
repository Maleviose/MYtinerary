import React, { Component } from "react";
import logoMI from "../assets/images/MYtineraryLogo.png";
import start from "../assets/images/circled-right-2.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <img src={logoMI} className="logoSized" alt="logo"></img>
        <div>
          <img src={start} alt="flechita" className="startImg"></img>
        </div>
        <h3>Want to build your own MYtinerary?</h3>
      </div>
    );
  }
}
