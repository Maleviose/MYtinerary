import React, { Component } from "react";
import Form from "./form.jsx"
import "../assets/css/App.css";

export default class Create extends Component {
  
  createBlogPost(data) {
    return fetch('http://localhost:3000/signup', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}

  render() {
    return (
      <div>
        <Form onSubmit={this.createBlogPost}></Form>
      </div>
      
    );
  }
}
