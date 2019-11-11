import "../assets/css/App.css";
import start from "../assets/images/circled-right-2.png";
import React, { Component } from "react";


export default class Start extends Component {
  render() {
    return (
      <a href="/"><img src={start} alt="start" className="startImg"></img></a>
    );
  }
}
