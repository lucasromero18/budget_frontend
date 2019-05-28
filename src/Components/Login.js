import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Login extends Component {
    render(){
      return (
        <div id="login-page">
        <div id="login">
        </div>
          <h1 className="login-register-header">Login</h1>  
          <div className="form-container">
            <Form>
              <FormGroup className="label-input-container">
                <Label className="input-name-email-login">Email</Label>
                <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-password-login">Password</Label>
                <Input type="password" name="password"/>
              </FormGroup>
                  <Input className="submit" type="submit" name="submit" value="Submit"/>
            </Form>
          </div>
        </div>
      );
    }
  }

  export default Login;