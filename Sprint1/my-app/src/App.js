//Cambiar Credenciales en windows para git!!!!
// Route https://www.youtube.com/watch?v=oWEys5cX3kE
import './assets/css/App.css';
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Agrego Bootstrap con "npm install react-bootstrap bootstrap"
//Agrego React router con "npm install -- save react-router"
// import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";
import Content from "./component/content.jsx";
import Cities from "./component/cities.jsx";
import Itineraries from "./component/itineraries.jsx";
import Login from "./component/login.jsx";
import Create from "./component/create.jsx";



class App extends Component {
    render() {
        return ( 
          <BrowserRouter>
          <div className="App">
          {/*********** Aca empiezo el landing page!!!! ***********/}
            <Header></Header>
          
              <Route exact={true} path="/" component={Content} />
              <Route path='/cities' component={Cities}/>
              <Route path='/Itineraries' component={Itineraries}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Create}/>
           <Footer></Footer>
          </div>
          </BrowserRouter>
        );
    }
}

export default App;