import React from 'react';

import DateInput from './date-input';
import EmailInput from './email-input';
import TextInput from './text-input';

import { saveCustomer, saveAdvisorInfo } from '../../api/customer-info';

import { advisorContainer } from '../../styles/advisor/questionnaire-form';

export default class QuestionnaireForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advisorName: '',
      shopName: '',
      advisorEmail: '',
      customerName: '',
      customerEmail: '',
      appointmentDate: '',
    };
  }
  setShopName(name) {
    this.setState({
      shopName: name,
    });
  }
  setAdvisorName(name) {
    this.setState({
      advisorName: name,
    });
  }
  setAdvisorEmail(email) {
    this.setState({
      advisorEmail: email,
    });
  }
  setCustomerName(name) {
    this.setState({
      customerName: name,
    });
  }
  setCustomerEmail(email) {
    this.setState({
      customerEmail: email,
    });
  }
  setAppointmentDate(date) {
    this.setState({
      appointmentDate: date,
    });
  }
  handleSubmit(event) {
    // makes api call behind the scenes
    event.preventDefault();
    const customer = {
      customerName: this.state.customerName,
      customerEmail: this.state.customerEmail,
      appointmentDate: this.state.appointmentDate,
    };
    saveCustomer(customer);
    const advisorInfo = {
      shopName: this.state.shopName,
      advisorName: this.state.advisorName,
      advisorEmail: this.state.advisorEmail,
    };
    saveAdvisorInfo(advisorInfo);
  }
  render() {
    return (
      <div>
        <div className="main-container">
          <form onSubmit={e => this.handleSubmit(e)} className="form-style-4">
            <label htmlFor="shop-name">
              <span>
                Shop Name
              </span>
              <TextInput
                id="shop-name"
                name="shop-name"
                onChange={e => this.setShopName(e.target.value)}
                value={this.state.shopName}
              />
            </label>
            <label htmlFor="advisor-name">
              <span>
                Your Name
              </span>
              <TextInput
                name="advisor-name"
                onChange={e => this.setAdvisorName(e.target.value)}
                value={this.state.advisorName}
              />
            </label>
            <label htmlFor="advisor-email">
              <span>
                Your Email
              </span>
              <EmailInput
                name="advisor-email"
                onChange={e => this.setAdvisorEmail(e.target.value)}
                value={this.state.advisorEmail}
              />
            </label>
            <label htmlFor="customer-name">
              <span>
                Customers Name
              </span>
              <TextInput
                name="customer-name"
                onChange={e => this.setCustomerName(e.target.value)}
                value={this.state.customerName}
              />
            </label>
            <label htmlFor="customer-email">
              <span>
                Customers Email
              </span>
              <EmailInput
                name="customer-email"
                onChange={e => this.setCustomerEmail(e.target.value)}
                value={this.state.customerEmail}
                autocomplete="off"
              />
            </label>
            <label htmlFor="appointment-date">
              <span>
                Appointment Date
              </span>
              <DateInput
                name="appointment-date"
                onChange={e => this.setAppointmentDate(e.target.value)}
                value={this.state.appointmentDate}
              />
            </label>
            <label htmlFor="submit">
              <span>
                Send Email
              </span>
              <input
                type="submit"
                value="Submit"
              />
            </label>
          </form>
          <style jsx>{advisorContainer}</style>
        </div>
      </div>
    );
  }
}
