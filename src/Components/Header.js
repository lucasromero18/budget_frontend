import React, {Component} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
  import "../App.css"


//ONLY RENDER NAVBAR IF USER IS LOGGED IN

class Header extends Component {
    render(){
      return (
        <>    
        <div id="navContainer">
      `  <Navbar id="nav-position-color" color="light" light expand="md">
          <NavbarBrand className="navLink" href="/">BudgetCity</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navLink" href="/login">Your Expenses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/register">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>`
      `</div>
      </>
      );
    }
  }

  export default Header;