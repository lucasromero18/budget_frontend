import React, {Component} from 'react'
import "../App.css"
import Header from "./Header.js"
import SideNav from './SideNav.js'
import PieChartMonthly from './PieChartMonthly.js'
import PieChartWeekly from './PieChartMonthly.js'
import PieChartDaily from './PieChartMonthly.js'
import {Button, Container, Row, Col} from 'reactstrap'



class Dashboard extends Component {

  state={
    username: ""
  }
  
  render(){      

      return (
        <>
          <div id="dashboard">
            <Header />
              <div className="dashboard-header-container">
                <h1 className="dashboard-header">Welcome, Lucas!</h1>
              </div>
              <div className="button-sideNav-container">
                <Button onClick={this.props.sideNavShow} className="sideNav-button" size="lg">More Options</Button>
              </div> 
                {this.props.sideNavState && <SideNav pieChartWeeklyClickEvent={this.props.showWeeklyPieChartOnClick} sideNavHide={this.props.sideNavHide}/>}
                <PieChartMonthly />
                {this.props.showPieChartWeekly && <PieChartWeekly />}
                <PieChartDaily />
          </div>
        </>
      );
    }
  }

  export default Dashboard;