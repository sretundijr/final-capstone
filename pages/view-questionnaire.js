
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

// helper
import completedQuestionnaire from '../src/mock-completed-quesitons';

import EmailTech from '../src/components/advisor/email-tech';

export default class ViewCompletedQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerLink: '',
      customerName: '',
      returnedQuestionnaire: {},
      techContainerStatus: 'hide-container',
      technicianEmail: '',
    };
  }
  // todo this might change when server is implemented
  async componentDidMount() {
    console.log(this.props.url.pathname);
    const query = this.props.url.query;
    const link = `${this.props.url.pathname}?customerName=${query.customerName}`;
    this.setState({
      customerLink: link,
      customerName: query.customerName,
      returnedQuestionnaire: completedQuestionnaire(),
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
    console.log(this.state.customerLink);
  }
  questionAndAnswerElement() {
    console.log(this.state.customerLink);
    const element = Object.keys(this.state.returnedQuestionnaire).map((key) => {
      return (
        <div key={key}>
          <h4 className="questions">{key}</h4>
          <p className="answers">{this.state.returnedQuestionnaire[key]}</p>
        </div>
      );
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
            height: 100vh;
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
