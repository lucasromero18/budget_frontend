import React, {Component} from 'react'
import "../App.css"
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Button} from 'reactstrap'



class SideNav extends Component {
    render(){
      return (
        <div className="side-nav">
          <Nav vertical className="sideNav-container">
            <NavItem>
              <NavLink className="sideNav-link" href="/expenses">Your Expenses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="sideNav-link" href="#">Bar Graph</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.props.pieChartWeeklyClickEvent} className="sideNav-link" href="#">Weekly</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.props.pieChartDailyClickEvent} className="sideNav-link" href="#">Daily</NavLink>
            </NavItem>
          </Nav>
          <Button onClick={this.props.sideNavHide} className="sideNav-button-hide" size="lg">Hide</Button>
        </div>
      );
    }
  }

  export default SideNav;