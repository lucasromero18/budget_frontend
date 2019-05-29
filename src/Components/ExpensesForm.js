import React, {Component} from 'react'
import "../App.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class ExpensesForm extends Component {

  state = {
    displayMoreThanOneForm: false
  }

  displayNewExpensesForm = () => {
    this.setState({
      displayMoreThanOneForm: !this.state.displayMoreThanOneForm
    })
}

  render(){

      let form = null;
      if(this.state.displayMoreThanOneForm){
          form = (
            <Form>
            <FormGroup className="label-input-container">
              <Label className="input-name-login-expenses-form">Bill Name</Label>
              <Input type="name" name="name"/>
            </FormGroup>
            <FormGroup className="label-input-container">
              <Label className="input-name-password-login-expenses-form">Cost</Label>
              <Input type="text" name="cost"/>
            </FormGroup>
            <FormGroup>
              <Button className="add-expense" onClick={this.displayNewExpensesForm}>Add Expense</Button>
            </FormGroup>
          </Form>
          )
      }

    return (
        <>
        <div id="expenses-form">
          <h1 className="login-register-expenses-form-header">Expenses</h1>
          <p className="credentials-line">Enter your expenses below!</p>
          <div className="form-container">
            <Form>
              <FormGroup className="label-input-container">
                <Label className="input-name-login-expenses-form">Bill Name</Label>
                <Input type="name" name="name"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-password-login-expenses-form">Cost</Label>
                <Input type="text" name="cost"/>
              </FormGroup>
              <FormGroup>
                <Button className="add-expense" onClick={this.displayNewExpensesForm}>Add Expense</Button>
                {form}
              </FormGroup>
              <Button className="submit" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses-form">Submit</a></Button>
            </Form>
          </div>
        </div>
        </>
      );
    }
  }

  export default ExpensesForm;