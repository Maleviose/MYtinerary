import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Header from './component/header.js';

class App extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            counter: 0,
        }
    }
    sumar(n) {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    restar(n) {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header" >
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 > Welcome to React </h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code > src / App.js </code> and save to reload. </p>

                <span>contador: {this.state.counter}</span>
                <button onClick={this.sumar.bind(this)}>+</button>
                <button onClick={this.restar.bind(this)}>-</button>
                <Header></Header>
            </div>
        );
    }
}

export default App;