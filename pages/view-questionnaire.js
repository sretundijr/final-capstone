
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

// helper
// import completedQuestionnaire from '../src/mock-completed-quesitons';

import { getCompletedQuestionnaire, sendQuestionnaireToTech } from '../src/api/advisor-dash';

import EmailTech from '../src/components/advisor/email-tech';

export default class ViewCompletedQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerLink: '',
      customerName: '',
      returnedQuestionnaire: [],
      techContainerStatus: 'hide-container',
      technicianEmail: '',
    };
  }
  // todo this might change when server is implemented
  async componentDidMount() {
    const query = this.props.url.query;
    const customerLink = `${this.props.url.pathname}?id=${query.id}customerName=${query.customerName}`;
    const answers = await getCompletedQuestionnaire(query.id);
    console.log(answers);
    this.setState({
      customerLink,
      customerName: query.customerName,
      returnedQuestionnaire: answers,
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
    // console.log(this.state.customerLink);
    const linkObj = {
      customerLink: this.state.customerLink,
      technicianEmail: this.state.technicianEmail,
    };
    sendQuestionnaireToTech(linkObj)
      .then(() => {
        this.setState({
          techContainerStatus: 'hide-container',
        });
      });
  }
  questionAndAnswerElement() {
    const element = this.state.returnedQuestionnaire.map((obj) => {
      return Object.keys(obj.answers).map((item) => {
        console.log(item);
        return (
          <div key={item}>
            <h4 className="questions">{item}</h4>
            <p className="answers">{obj.answers[item]}</p>
          </div>
        );
      });
    });
    return element;
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
          {this.questionAndAnswerElement()}
        </div>
        <div className="btn-container">
          <button onClick={() => Router.push('/advisor-dashboard')}>Back</button>
          <button onClick={() => this.modalBox()}>Send To Technician</button>
        </div>
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
}
