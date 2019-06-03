import React, {Component} from 'react'
import "../App.css"
import Header from "./Header.js"
import SideNav from './SideNav.js'
import BarGraph from './BarGraph.js'
import PieChartMonthly from './PieChartMonthly.js'
import PieChartWeekly from './PieChartWeekly.js'
import PieChartDaily from './PieChartDaily.js'
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
                {this.props.sideNavState && <SideNav barGraphClickEvent={this.props.barGraphClickEvent} pieChartDailyClickEvent={this.props.pieChartDailyClick} pieChartWeeklyClickEvent={this.props.pieChartWeeklyClick} sideNavHide={this.props.sideNavHide}/>}
                <PieChartMonthly />
                {this.props.barGraphState && <BarGraph />}
                {this.props.pieChartWeekly && <PieChartWeekly />}
                {this.props.pieChartDaily && <PieChartDaily />}
          </div>
        </>
      );
    }
  }

  export default Dashboard;