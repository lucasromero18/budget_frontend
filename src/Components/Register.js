import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Register extends Component {
    render(){
      return (
        <>
        <div id="register">
        </div>
          <h1 className="login-register-expenses-form-header">Register</h1>  
          <div className="form-container-register">
            <Form>
            <FormGroup className="label-input-container">
                <Label className="input-name">Name</Label>
                <Input type="name" name="name"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name">Email</Label>
                <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name">Password</Label>
                <Input type="password" name="password"/>
              </FormGroup>
                  <Button className="submit" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </>
      );
    }
  }

  export default Register;