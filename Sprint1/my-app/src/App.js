//Cambiar Credenciales en windows para git!!!!
// Route https://www.youtube.com/watch?v=oWEys5cX3kE
import React, { Component } from "react";
import "./assets/css/App.css";
//Agrego Bootstrap con "npm install react-bootstrap bootstrap"
//Agrego React router con "npm install -- save react-router"
// import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import Content from "./component/content";

class App extends Component {
  // constructor(arg) {
  //     super(arg)
  //     this.state = {
  //         counter: 0,
  //     }
  // }
  // sumar(n) {
  //     this.setState({
  //         counter: this.state.counter + 1
  //     })
  // }
  // restar(n) {
  //     this.setState({
  //         counter: this.state.counter - 1
  //     })
  // }

  render() {
    return (
      <div className="App">
        {/******************************** CODIGO DE PRUEBA PROPS Y ESTADOS!! Epic 3, ponele *********************************/}
        {/* <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 > Welcome to React </h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code > src / App.js </code> and save to reload. </p>

                <span>contador: {this.state.counter}</span>
                <button onClick={this.sumar.bind(this)}>+</button>
                <button onClick={this.restar.bind(this)}>-</button>
                <Header></Header> */}

        {/*********** Aca empiezo el landing page!!!! ***********/}
        <Header>
          <Content></Content>
          {/* <Router>
            {/* <Switch>
                <Route path="/log-in" Component={login}>Log in </Route>
                <Route path="/create-acc" Component={createacc}>Create Account </Route>
            </Switch>
            </Router> */}
          <Footer>hola</Footer>
        </Header>
      </div>
    );
  }
}

export default App;
