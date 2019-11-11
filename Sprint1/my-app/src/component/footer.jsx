import React, { Component } from "react";
import home from "../assets/images/homeIcon.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <a href="/"><img src={home} alt="home" className="homeImg"></img></a>
      </div>
    );
  }
}
