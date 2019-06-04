import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'



class Register extends Component {

  state={
    name: "",
    email: "",
    password: "",
    monthly_inc: ""
  }

  formOnChange = (e) => {
    this.setState({
      name: e.target.name,
      email: e.target.email,
      password: e.target.password,
      monthly_inc: e.target.monthly_inc
    })
  }

  registerFormSubmission = (e) => {
    e.preventDefault()
    axios.post("http://localhost8000/users", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      monthly_inc: this.state.monthly_inc
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

    render(){

      return (
        <>
        <div id="register">
        </div>
          <h1 className="register-header">Register</h1>  
          <div className="form-container-register">
            <Form onChange={this.formOnChange}>
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
                  <Button onSubmit={this.registerFormSubmission} className="submit-register" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </>
      );
    }
  }

  export default Register;