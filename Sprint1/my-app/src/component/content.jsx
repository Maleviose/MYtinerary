import React, { Component } from "react";
import "../assets/css/App.css";
import Start from "./start";
import Build from "./build"

export default class Content extends Component {
  render() {
    return (
      <div>
        <h3>Find your perfect trip, designed by insider who know and love their cities.</h3>
        <h2>Start browsing</h2>
        <Start />
        <Build />
      </div>
      
    );
  }
}
