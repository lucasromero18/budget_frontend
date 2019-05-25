import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar.js"
import LandingPage from "./Components/LandingPage.js"
import Login from "./Components/Login.js"
import Register from "./Components/Register.js"
import Dashboard from "./Components/Dashboard.js"
import Footer from "./Components/Footer.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Navbar />
          <div className="App">
                <Switch>
                    <Route path="/" exact render={() => <LandingPage />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/register" render={() => <Register />} />
                    <Route path="/dashboard" render={() => <Dashboard />} />
                </Switch>
          </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
