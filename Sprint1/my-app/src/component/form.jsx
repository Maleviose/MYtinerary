import React, { Component } from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      mail: '',
      password: '',
      pic: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    alert('A new user was submitted: ' + this.state.username);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text'||'password' ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username: 
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Mail: 
          <input
            name="mail"
            type="text"
            value={this.state.mail}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Password:
            <input 
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange} />
        </label>
        <label>
          Load a profile pic:
          <input 
            name = "pic"
            type="text"
            value={this.state.pic}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label><input type="submit" value="Submit" /></label>
      </form>
    );
  }
  }