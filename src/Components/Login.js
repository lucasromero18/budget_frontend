import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'


class Login extends Component {

  state={
    email: "",
    password: ""
  }

  loginFormSubmission = (e) => {
    e.preventDefault()
    console.log(this.state.email, this.state.password)
  }

  loginInputChange = () => {
    this.setState({
      email: this.state.email,
      password: this.state.password
    })
  }

    render(){

      axios.post("http://localhost:8000/users", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })

      return (
        <div id="login-page">
        <div id="login">
        </div>
          <h1 className="login-header">Login</h1>  
          <div className="form-container-login">
            <Form onSubmit={this.loginFormSubmission}>
              <FormGroup className="label-input-container">
                <Label className="input-name-login">Email</Label>
                <Input onChange={this.loginInputChange} type="email" name="email"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-password-login">Password</Label>
                <Input onChange={this.loginInputChange} type="password" name="password"/>
              </FormGroup>
              <Button className="submit-login" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </div>
      );
    }
  }

  export default Login;