import React, { Component } from "react";
import { Button } from 'reactstrap';


export default class Build extends Component {
  render() {
    return (
    <div>
      <h3>Want to build your own MYtinerary?</h3>
        <nav>
          <Button outline color="primary"><a href="/login" alt="log-in">Log in</a></Button>{' '}
          <Button outline color="primary"><a href="/signup" alt="create-account">Create Account</a></Button>{' '}
        </nav>
    </div>
    );
  }
}
