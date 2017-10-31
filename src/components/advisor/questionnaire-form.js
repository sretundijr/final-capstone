
import React from 'react';

import DateInput from './date-input';
import EmailInput from './email-input';
import TextInput from './text-input';

import { saveCustomer, saveAdvisorInfo, sendEmail } from '../../api/advisor-dash';

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
    // saveCustomer(customer);
    // const advisorInfo = {
    //   shopName: this.state.shopName,
    //   advisorName: this.state.advisorName,
    //   advisorEmail: this.state.advisorEmail,
    // };
    sendEmail(customer)
      .then(() => this.setState({
        customerName: '',
        customerEmail: '',
        appointmentDate: '',
      }));
    // saveAdvisorInfo(advisorInfo);
  }
  // todo render with props decisions
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
                value={this.props.shopName}
              />
            </label>
            <label htmlFor="advisor-name">
              <span>
                Your Name
              </span>
              <TextInput
                name="advisor-name"
                onChange={e => this.setAdvisorName(e.target.value)}
                value={this.props.advisorName}
              />
            </label>
            <label htmlFor="advisor-email">
              <span>
                Your Email
              </span>
              <EmailInput
                name="advisor-email"
                onChange={e => this.setAdvisorEmail(e.target.value)}
                value={this.props.advisorEmail}
                autocomplete="on"
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
          <style jsx>{`
            .main-container {
              display: flex;
              justify-content: center;
              max-width: 1000px;
              width: 100%;
              margin: 0 auto;    
            }
            .form-style-4{
              max-width: 500px;
              width: 100%;
              font-size: 16px;
              background: #495C70;
              padding: 30px 30px 15px 30px;
              border: 5px solid #53687E;
            }
            .form-style-4 input[type=submit],
            .form-style-4 label
            {
              font-family: Georgia, "Times New Roman", Times, serif;
              font-size: 16px;
              color: #fff;
              margin-top: 10px;    
            }
            .form-style-4 label {
              display:block;
              margin-bottom: 10px;
              margin-top: 10px;    
            }
            .form-style-4 label > span{
              display: inline-block;
              float: left;
              width: 150px;
              margin-top: 10px;
            }
            .form-style-4 input[type=submit],
            .form-style-4 input[type=button]{
              background: #576E86;
              border: none;
              padding: 8px 10px 8px 10px;
              border-radius: 5px;
              color: #A8BACE;
            }
            .form-style-4 input[type=submit]:hover {
              background: #394D61;
            }
          `}</style>
        </div>
      </div>
    );
  }
}
