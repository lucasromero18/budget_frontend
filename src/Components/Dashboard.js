import React, {Component} from 'react'
import "../App.css"
import Header from "./Header.js"
import SideNav from './SideNav.js'
import PieChart from './PieChart.js'
import {Button} from 'reactstrap'



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
              {this.props.sideNavState && <SideNav sideNavHide={this.props.sideNavHide}/>}
              <PieChart />
          </div>
        </>
      );
    }
  }

  export default Dashboard;