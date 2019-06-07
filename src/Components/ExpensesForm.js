import React, {Component} from 'react'
import "../App.css"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class ExpensesForm extends Component {

  state = {
    displayMoreThanOneForm: false,
    bill_name: "",
    bill_price: ""
  }

  expensesFormOnChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  expensesFormOnSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/credentials", {
      bill_name: this.state.bill_name,
      bill_price: this.state.bill_price
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
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
            <Form onSubmit={this.expensesFormOnSubmit}>
            <FormGroup className="label-input-container">
              <Label className="input-name-expenses-form">Bill Name</Label>
              <Input onChange={this.expensesFormOnChange} type="text" name="bill_name"/>
            </FormGroup>
            <FormGroup className="label-input-container">
              <Label className="input-name-expenses-form">Cost</Label>
              <Input onChange={this.expensesFormOnChange} type="text" name="bill_price"/>
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
          <h1 className="expenses-form-header">Expenses</h1>
          <p className="credentials-line">Enter your expenses below!</p>
          <div className="form-container-expenses-form">
            <Form onSubmit={this.expensesFormOnSubmit}>
              <FormGroup className="label-input-container">
                <Label className="input-name-expenses-form">Bill Name</Label>
                <Input onChange={this.expensesFormOnChange} type="text" name="bill_name"/>
              </FormGroup>
              <FormGroup className="label-input-container">
                <Label className="input-name-expenses-form">Cost</Label>
                <Input onChange={this.expensesFormOnChange} type="text" name="bill_price"/>
              </FormGroup>
              <FormGroup>
                <Button className="add-expense" onClick={this.displayNewExpensesForm}>Add Expense</Button>
                {form}
              </FormGroup>
              <Button href="/dashboard" className="submit-expenses-form" type="submit" name="submit">Submit</Button>
            </Form>
          </div>
        </div>
        </>
      );
    }
  }

  export default ExpensesForm;