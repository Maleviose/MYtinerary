import React, { Component } from "react";
import axios from "axios";

export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.value != undefined) {
      alert("Your input value is: " + this.state.value);
    }
    const respuesta = await axios.post("http://localhost:4000/api/login", {
      mail: this.state.mail,
      password: this.state.password,
    });

    alert(respuesta.data.message);
  };

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.type === "text" || "password" ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state);
    return (
      <form name="login" className="form" onSubmit={this.handleSubmit}>
        <label>
          Mail:
          <input
            name="mail"
            type="text"
            value={this.state.mail}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
        <button
            type="submit"
            id="new_acc_submit"
            onClick={this.handleSubmit}
            className="btn-default btn"
          >
            Log in
          </button>
        </label>
      </form>
    );
  }
}
