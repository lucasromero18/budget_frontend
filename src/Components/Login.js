import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Login extends Component {
    render(){
      return (
        <div id="login-page">
        <div id="login">
        </div>
          <h1 className="login-header">Login</h1>  
          <div className="form-container-login">
            <Form>
              <FormGroup className="label-input-container">
                <Label className="input-name-login">Email</Label>
                <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-password-login">Password</Label>
                <Input type="password" name="password"/>
              </FormGroup>
              <Button className="submit-login" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </div>
      );
    }
  }

  export default Login;