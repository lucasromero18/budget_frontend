import React, {Component} from 'react'
import "../App.css"
import Header from "./Header.js"


class Dashboard extends Component {
    render(){
      return (
        <>
          <div>
            <Header />
              <h1>Dashboard</h1>
          </div>
        </>
      );
    }
  }

  export default Dashboard;