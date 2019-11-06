//Cambiar Credenciales en windows para git!!!!
// Route https://www.youtube.com/watch?v=oWEys5cX3kE
import React, { Component } from 'react';

import './assets/css/App.css';
import logoMI from './assets/images/MYtineraryLogo.png'
import start from './assets/images/circled-right-2.png'
import home from './assets/images/homeIcon.png'
 //Agrego Bootstrap con "npm install react-bootstrap bootstrap"
 //Agrego React router con "npm install -- save react-router"
 import { BrowseRouter as Router,Switch, Route} from 'react-router-dom';

import logo from './assets/images/logo.svg';
import Header from './component/header.js';

const login = () => <h1>log in</h1>
const createacc = () => <h1>create acc</h1>

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
                <div>
                    <img src = {logoMI} className="logoSized" alt = "logo"></img>
                    <div>
                        <h3>Find your perfect trip, designed by insider who know and love their cities.</h3>
                        <h2>Start browsing</h2>
                    </div>
                    <link> <img src = {start} alt ="flechita" className="startImg"></img></link>
                    
                    <h3>Want to build your own MYtinerary?</h3>
                    
                        {/* <Router>{/*No me funca bootstrap */}
                        {/* <Switch>
                            <Route path="/log-in" Component={login}>Log in </Route>
                            <Route path="/create-acc" Component={createacc}>Create Account </Route>
                        </Switch>
                        </Router> */}
                    
                    <img src = {home} alt = "home" className="homeImg"></img>
                </div>
            </div>
        );
    }
}

export default App;