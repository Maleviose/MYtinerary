import React, { Component } from "react";
import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      mail: "",
      password: "",
      userPic: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.value != undefined) {
      alert("Your input value is: " + this.state.value);
    }
    const respuesta = await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
      mail: this.state.mail,
      password: this.state.password,
      userPic: this.state.userPic
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
    return (
      <form name="new_acc" className="form">
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
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
          Load a profile pic:
          <input
            name="userPic"
            type="text"
            value={this.state.pic}
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
            Submit
          </button>
        </label>
      </form>
    );
  }
}
