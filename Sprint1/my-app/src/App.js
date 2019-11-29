//Cambiar Credenciales en windows para git!!!!
// Route https://www.youtube.com/watch?v=oWEys5cX3kE
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Agrego Bootstrap con "npm install react-bootstrap bootstrap"
//Agrego React router con "npm install -- save react-router"
// import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import Content from "./component/content.jsx";
import Cities from "./component/cities.jsx";
import Login from "./component/login.jsx";
import Create from "./component/create.jsx";



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
          <BrowserRouter>
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
            <Header></Header>
          
              <Route exact={true} path="/" component={Content} />
              <Route path='/cities' component={Cities}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Create}/>
           <Footer></Footer>
          </div>
          </BrowserRouter>
        );
    }
}

export default App;