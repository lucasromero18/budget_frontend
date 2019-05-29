import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Login extends Component {
    render(){
      return (
        <div id="login-page">
        <div id="login">
        </div>
          <h1 className="login-register-expenses-form-header">Login</h1>  
          <div className="form-container">
            <Form>
              <FormGroup className="label-input-container">
                <Label className="input-name-login-expenses-form">Email</Label>
                <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-password-login-expenses-form">Password</Label>
                <Input type="password" name="password"/>
              </FormGroup>
              <Button className="submit" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </div>
      );
    }
  }

  export default Login;