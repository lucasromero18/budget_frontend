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
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  registerFormSubmission = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/register", {
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
            <Form onSubmit={this.registerFormSubmission}>
            <FormGroup className="label-input-container">
                <Label className="input-name-register">Name</Label>
                <Input onChange={this.formOnChange} type="name" name="name"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Email</Label>
                <Input onChange={this.formOnChange} type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Password</Label>
                <Input onChange={this.formOnChange} type="password" name="password"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-register">Monthly Income</Label>
                <Input onChange={this.formOnChange} type="number" name="monthly_inc"/>
              </FormGroup>
                  <Button className="submit-register" type="submit" name="submit">Submit</Button>
            </Form>
          </div>
        </>
      );
    }
  }

  export default Register;