import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./Components/LandingPage.js"
import Login from "./Components/Login.js"
import Register from "./Components/Register.js"
import Dashboard from "./Components/Dashboard.js"
import Footer from "./Components/Footer.js"
import ExpensesForm from "./Components/ExpensesForm.js"
import Expenses from "./Components/Expenses.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Button} from 'reactstrap'


//ONLY GOING TO RENDER NAVBAR WHEN USER IS LOGGED IN

class App extends Component {

  state = {
    users: [],
    credentials: [],
    showNav: false,
    showPieChartWeekly: false,
    showPieChartDaily: false,
    showBarGraph: false
  }

  async componentDidMount(){
    const usersResponse = await fetch("http://localhost:8000/users")
    const users = await usersResponse.json()
    const credentialsResponse = await fetch("http://localhost:8000/credentials")
    const credentials = await credentialsResponse.json()
    this.setState({
      users, credentials
    })
  }

  showSideNav = () => {
    this.setState({
      showNav: true
    })
  }

  hideSideNav = () => {
    this.setState({
      showNav: false
    })
  }



  showDailyPieChartClick = () => {
    this.setState({
      showPieChartDaily: true
    })
  }

showWeeklyPieChartClick = () => {
  this.setState({
    showPieChartWeekly: true
  })
}

showBarGraph = () => {
  this.setState({
    showBarGraph: true
  })
}



  render(){
    return (
      <BrowserRouter>
          <div className="App">
                <Switch>
                    <Route path="/" exact render={() => <LandingPage />} />
                    <Route path="/login" render={(props) => <Login users={this.state.users}/>} />
                    <Route path="/register" render={(props) => <Register {...props} />} />
                    <Route path="/expenses-form/" render={(props) => <ExpensesForm {...props}/>} />
                    <Route path="/dashboard" render={(props) => <Dashboard barGraphState={this.state.showBarGraph} barGraphClickEvent={this.showBarGraph} pieChartWeeklyClick={this.showWeeklyPieChartClick} pieChartWeekly={this.state.showPieChartWeekly} pieChartDaily={this.state.showPieChartDaily} pieChartDailyClick={this.showDailyPieChartClick} sideNavState={this.state.showNav} sideNavShow={this.showSideNav} sideNavHide={this.hideSideNav} users={this.state.users} credentials={this.state.credentials} {...props}/>} />
                    <Route path="/expenses" render={(props) => <Expenses users={this.state.users} credentials={this.state.credentials} {...props}/>} />
                </Switch>
          </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
