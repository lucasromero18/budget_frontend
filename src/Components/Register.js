import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Register extends Component {
    render(){
      return (
        <>
        <div id="register">
        </div>
          <h1 className="register-header">Register</h1>  
          <div className="form-container-register">
            <Form>
            <FormGroup className="label-input-container">
                <Label className="input-name-register">Name</Label>
                <Input type="name" name="name"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Email</Label>
                <Input type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Password</Label>
                <Input type="password" name="password"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Monthly Income</Label>
                <Input type="text" name="income"/>
              </FormGroup>
                  <Button className="submit-register" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </>
      );
    }
  }

  export default Register;