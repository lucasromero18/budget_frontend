import React, {Component} from 'react'
import "../App.css"
import {Row, Col} from 'reactstrap'
import {Table} from 'reactstrap'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header.js'


class Expenses extends Component {
    render(){
      return (
        <div id="expenses">
          <Header />
          <Row style={{marginLeft: "2rem"}}>
            <Col sm="4">
              <h1 className="expenses-page-header">Your Expenses</h1>
              <div className="table-chart-container">
                <Table style={{width: "80%"}}>
                  <thead>
                    <tr className="table-row-headers">
                      <th className="table-bill-header">Bill</th>
                      <th className="table-cost-header">Cost</th>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Car</td>
                      <td className="table-cost">$300</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Rent</td>
                      <td className="table-cost">$1,000</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Gym</td>
                      <td className="table-cost">$300</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Food</td>
                      <td className="table-cost">$400</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Spending</td>
                      <td className="table-cost">$500</td>
                    </tr>
                    <tr className="table-row">
                      <td className="table-bill">Your Total</td>
                      <td className="table-cost">$2,500</td>
                    </tr>
                  </thead>
                </Table>
              </div>
            </Col>
            <Col sm="4">
              <h1 className="expenses-page-header">Update Expense</h1>
                <div className="form-container-expenses-add-page">
                  <Form>
                    <FormGroup className="label-input-container">
                      <Label className="input-name-expenses-add-page">Bill</Label>
                      <Input type="name" name="name"/>
                    </FormGroup>
                    <FormGroup className="label-input-container">
                      <Label className="input-name-expenses-add-page">Cost</Label>
                      <Input type="text" name="cost"/>
                    </FormGroup>
                    <Button className="update-expenses-add-page" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses">Update</a></Button>
                  </Form>
                </div>
            </Col>
            <Col sm="4">
              <h1 className="expenses-page-header">Add Expense</h1>
              <div className="form-container-expenses-add-page">
                  <Form>
                    <FormGroup className="label-input-container">
                      <Label className="input-name-expenses-add-page">Bill</Label>
                      <Input type="name" name="name"/>
                    </FormGroup>
                    <FormGroup className="label-input-container">
                      <Label className="input-name-expenses-add-page">Cost</Label>
                      <Input type="text" name="cost"/>
                    </FormGroup>
                    <Button className="update-expenses-add-page" type="submit" name="submit"><a className="submit-login-register-anchor" href="/expenses">Add</a></Button>
                  </Form>
                </div>
            </Col>
          </Row>
        </div>
      );
    }
  }

  export default Expenses;