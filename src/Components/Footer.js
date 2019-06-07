import React, {Component} from 'react'
import "../App.css"



class Footer extends Component {
    render(){
      return (
        <div className="footer">
          <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© 2019 Copyright:
              <a href="https://mdbootstrap.com/education/bootstrap/"> BudgetCity.com</a>
            </div>
          </footer>
        </div>
      );
    }
  }

  export default Footer;