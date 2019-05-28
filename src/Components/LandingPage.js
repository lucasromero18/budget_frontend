import React, {Component} from 'react'
import "../App.css"
import {Button} from 'reactstrap'


class LandingPage extends Component {
    render(){
      return (
        <>
        <div id="hero-landing-page">
        </div>
        <div>
          <h1 className="hero-landing-page-welcome-to">Welcome to</h1> 
        </div>
        <div>
          <h1 className="hero-landing-page-budget-city">BudgetCity</h1>
        </div>
        <div>
          <p className="hero-landing-page-slogan">Track daily, weekly, and monthly expenses effectively!</p>
        </div>
        <div>
          <Button className="hero-landing-page-button" size="lg"><a className="hero-landing-page-button-anchor" href="#three-reasons-landing-page">Why BudgetCity?</a></Button>
        </div>
        <div>
          <Button className="hero-landing-page-button-login" size="lg"><a className="hero-landing-page-login-anchor" href="/login">Login</a></Button>
        </div>
        <div>
          <Button className="hero-landing-page-button-register" size="lg"><a className="hero-landing-page-register-anchor" href="/register">Register</a></Button>
        </div>
        <div id="three-reasons-landing-page">
          <h1 className="three-reasons-header-purpose">Why track your expenses?</h1>
          <div className="three-reasons-paragraph-container">
            <div className="three-reasons-paragraph-text">"Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore 
              u fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum."
            </div>
          </div>
          <div className="three-reasons-arrow-container">
            <i class="fas fa-arrow-down"></i>
          </div>
          <h1 className="three-reasons-header">Here's why BudgetCity is special</h1>
          <div className="three-reasons-paragraph-container">
            <div className="three-reasons-paragraph-text">"Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore 
              u fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum."
            </div>
          </div>
          <div className="three-reasons-arrow-container">
            <i class="fas fa-arrow-down"></i>
          </div>
          <h1 className="three-reasons-header">What's in it for you?</h1>
          <div className="three-reasons-paragraph-container">
            <div className="three-reasons-paragraph-text">"Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore 
              u fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum."
            </div>
          </div>
        </div>
        </>
      );
    }
  }

  export default LandingPage;
