import React from 'react';
import Head from 'next/head';

import DateInput from './date-input';
import EmailInput from './email-input';
import TextInput from './text-input';

import { advisorContainer, column1 } from '../../styles/advisor-container';

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
  handleSubmit() {
    // makes api call behind the scenes
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Head>
          <title>Send A Questionniare</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        Welcome to Advisor send a survey
        <div>
          <div>
            <h2>To send a questionnaire fill in the required info below</h2>
          </div>
          <div>
            <h4>Enter your shop or dealership name</h4>
            <TextInput
              onChange={e => this.setShopName(e.target.value)}
              value={this.state.shopName}
            />
          </div>
          <div className="advisor-container">
            <div className="column-one">
              <h4>Enter your name</h4>
              <TextInput
                onChange={e => this.setAdvisorName(e.target.value)}
                value={this.state.advisorName}
              />
            </div>
            <div>
              <h4>Please enter your email address</h4>
              <EmailInput
                onChange={e => this.setAdvisorEmail(e.target.value)}
                value={this.state.advisorEmail}
              />
            </div>
            <div>
              <h4>Please enter your customers name</h4>
              <TextInput
                onChange={e => this.setCustomerName(e.target.value)}
                value={this.state.customerName}
              />
            </div>
            <div>
              <h4>Please enter the customers email address</h4>
              <EmailInput
                onChange={e => this.setCustomerEmail(e.target.value)}
                value={this.state.customerEmail}
              />
            </div>
            <div>
              <h4>Please enter your customers appointment date</h4>
              <DateInput
                onChange={e => this.setAppointmentDate(e.target.value)}
                value={this.state.appointmentDate}
              />
            </div>
          </div>
          <div>
            <button onClick={this.handleSubmit()}>Submit</button>
          </div>
          <style jsx>{advisorContainer}</style>
          <style jsx>{column1}</style>
        </div>
      </div>
    );
  }
}
