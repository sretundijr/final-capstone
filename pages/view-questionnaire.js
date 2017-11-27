
/* global location */

import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import queryString from 'query-string';

import { getCompletedQuestionnaire, sendQuestionnaireToTech } from '../src/api/advisor-dash';

import EmailTech from '../src/components/advisor/email-tech';

export default class ViewCompletedQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advisorId: '',
      customerLink: '',
      customerName: '',
      techContainerStatus: 'hide-container',
      technicianEmail: '',
      questons: [],
      answers: [],
      selectedIssue: '',
    };
  }
  // todo this might change when server is implemented
  async componentDidMount() {
    const query = queryString.parse(location.search);
    const customerInfo = {
      id: query.id,
      customerName: query.customerName,
    };
    const stringifiedCustomer = queryString.stringify(customerInfo);
    const customerLink = `${location.origin}${location.pathname}?${stringifiedCustomer}`;
    const answers = await getCompletedQuestionnaire(query.id);
    console.log(answers);
    this.setState({
      advisorId: query.advisorId,
      customerLink,
      customerName: query.customerName,
      questions: answers.questions,
      answers: answers.answers,
      selectedIssue: answers.selectedIssue,
    });
  }
  modalBox() {
    if (this.state.techContainerStatus === 'hide-container') {
      this.setState({
        techContainerStatus: 'show-container',
      });
    } else {
      this.setState({
        techContainerStatus: 'hide-container',
      });
    }
  }
  handleEmailChangeEvent(email) {
    this.setState({
      technicianEmail: email,
    });
  }
  sendQuestionnaireLink() {
    const linkObj = {
      customerLink: this.state.customerLink,
      technicianEmail: this.state.technicianEmail,
      customerName: this.state.customerName,
    };
    sendQuestionnaireToTech(linkObj)
      .then(() => {
        this.setState({
          techContainerStatus: 'hide-container',
        });
      });
  }
  questionAndAnswerElement() {
    if (this.state.questions) {
      const element = this.state.questions.map((question, index) => {
        return (
          <div key={question}>
            <h4 className="questions">{question}</h4>
            <p className="answers">{this.state.answers[index]}</p>
          </div>
        );
      });
      return element;
    }
    return '';
  }
  navButtons() {
    if (this.state.advisorId) {
      return (
        <div className="btn-container">
          <button onClick={() => Router.push(`/advisor-dashboard?_id=${this.state.advisorId}`)}>Back</button>
          <button onClick={() => this.modalBox()}>Send To Technician</button>
          <style jsx>{`
             .btn-container {
              align-self: center;
            }
            button {
              font-size: 20px;
              margin: 20px;
              width: 200px;
              height: auto;
              border: none;
              background: #576E86;
              color: #fff;
              border-radius: 5px;
              outline: none;
            }
           @media only screen and (max-width: 450px) {
            button {
              width: 100%;
              margin-left: 0;
              }
           }            
          `}
          </style>
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <div className="page">
        <Head>
          <title>View Questionnaire</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={this.state.techContainerStatus}>
          <EmailTech
            value={this.state.technicianEmail}
            closeBtn={() => this.modalBox()}
            onChange={e => this.handleEmailChangeEvent(e.target.value)}
            onClick={() => this.sendQuestionnaireLink()}
          />
        </div>
        <div className="customer-container">
          <h4>Customer Name</h4>
          <p>{this.state.customerName}</p>
          <h4>Selected Issue</h4>
          <p>{this.state.selectedIssue}</p>
          {this.questionAndAnswerElement()}
        </div>
        {this.navButtons()}
        <style jsx>{`
          .page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #495C70;
            width: auto;
            height: auto;
            color: rgb(73, 92, 112);
            font-size: 1.7vw;
          }
          .hide-container {
            display: none;
          }
          .show-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgb(73, 92, 112);
            padding: 20px;
            text-align: center;
            width: auto;
            height: max-content;
            color: white;
          }
          .customer-container {
            background-color: rgb(181, 186, 189);
            padding: 20px;
            text-align: center;
            width: auto;
            height: max-content;
          }
          
          @media only screen and (max-width: 900px) {
            main {
          }
           }
           @media only screen and (max-width: 750px) {
            .page {
          height: auto;
              font-size: 2.8vw;
            }
           }
           @media only screen and (max-width: 450px) {
            .page {
          font-size: 5.2vw;
            }
           }
          `}
        </style>
      </div>
    );
  }
}
