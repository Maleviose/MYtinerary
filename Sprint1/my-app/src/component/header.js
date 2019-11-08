import React, { Component } from "react";
import logoMI from "../assets/images/MYtineraryLogo.png";
import start from "../assets/images/circled-right-2.png";
import home from "../assets/images/homeIcon.png";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logoMI} className="logoSized" alt="logo"></img>
        <div>
          <h3>Find your perfect trip, designed by insider who know and love their cities.</h3>
          <h2>Start browsing</h2>
        </div>
        <div>
          <img src={start} alt="flechita" className="startImg"></img>
        </div>

        <h3>Want to build your own MYtinerary?</h3>

        <img src={home} alt="home" className="homeImg"></img>
      </div>
    );
  }
}
export default Header;
