
/* global location */

import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import queryString from 'query-string';

// components
import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import SingleQuestion from '../src/components/questionaire/single-question';
import Submit from '../src/components/questionaire/submit';

// api
import { saveCompletedQuestionnaire, getQuestionnaire } from '../src/api/questionnaire';

export class TroubleShootingQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionniare: [],
      selectedIssue: '',
      questions: [],
      userInput: {},
      renderSubmit: false,
      questionsAnswered: 0,
      shopName: '',
      advisorName: '',
      customerId: '',
      appointmentDate: '',
      customerName: '',
      questionIndex: 0,
    };
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.incrementQuestionIndex = this.incrementQuestionIndex.bind(this);
    this.decrementQuestionIndex = this.decrementQuestionIndex.bind(this);
  }
  async componentDidMount() {
    const query = queryString.parse(location.search);
    await getQuestionnaire()
      .then((res) => {
        this.setState({
          shopName: query.shopname,
          customerId: query.customerid,
          advisorName: query.advisorname,
          appointmentDate: new Date(query.appointmentdate).toLocaleDateString(),
          customerName: query.customername,
          questionniare: res,
        });
      });
  }
  setCategory(category) {
    const userSelectedQuestionType = this.state.questionniare
      .filter(questions => category === questions.issueType);
    this.setState({
      selectedIssue: category,
      questions: userSelectedQuestionType[0].questions,
      renderSubmit: true,
      questionIndex: 0,
    });
  }
  setUserAnswer(question, answer) {
    const input = {};
    input[question] = answer;
    this.setState(state => ({
      userInput: Object.assign({}, state.userInput, input),
    }));
  }
  getUserAnswer() {
    const answer = this.state.userInput[this.state.questions[this.state.questionIndex].question];
    if (answer === undefined) {
      return '';
    }
    return answer;
  }
  incrementQuestionIndex() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
    });
  }
  decrementQuestionIndex() {
    this.setState({
      questionIndex: this.state.questionIndex - 1,
    });
  }
  saveUserInput() {
    const userInputObj = {
      selectedIssue: this.state.selectedIssue,
      customerId: this.state.customerId,
      customerName: this.state.customerName,
      advisorName: this.state.advisorName,
      customerAnswers: this.state.userInput,
    };
    saveCompletedQuestionnaire(userInputObj)
      .then(() => Router.push('/thank-you'));
  }
  renderNextButton() {
    if (this.state.questionIndex === (this.state.questions.length - 1)) {
      return '';
    }
    return (
      <div>
        <button
          onClick={this.incrementQuestionIndex}
          className="next-btn"
        >Next
        </button>
        <style jsx>{`
          .next-btn {
            margin: 20px;
            width: 200px;
            height: 40px;
            border: none;
            background: #576E86;
            color: #fff;
            border-radius: 5px;
          }
        `}
        </style>
      </div>
    );
  }
  renderBackButton() {
    if (this.state.questionIndex > 0) {
      return (
        <div>
          <button
            onClick={this.decrementQuestionIndex}
            className="next-btn"
          >Back
          </button>
          <style jsx>{`
            .next-btn {
              margin: 20px;
              width: 200px;
              height: 40px;
              border: none;
              background: #576E86;
              color: #fff;
              border-radius: 5px;
            }
          `}</style>
        </div>
      );
    }
    return '';
  }
  renderSubmit() {
    const questionsAnswered = Object.keys(this.state.userInput).length;
    const allQuestions = this.state.questions.length;
    if (this.state.renderSubmit && questionsAnswered === allQuestions) {
      return (
        <Submit onClick={() => this.saveUserInput()} />
      );
    }
    return '';
  }
  renderQuestion() {
    if (this.state.questions.length > 0) {
      return (
        <SingleQuestion
          currentQuestion={this.state.questionIndex + 1}
          numberOfQuestions={this.state.questions.length}
          question={this.state.questions[this.state.questionIndex]}
          onChange={this.setUserAnswer}
          checked={this.state.userInput}
          renderNextButton={this.renderNextButton()}
          renderBackButton={this.renderBackButton()}
          value={this.getUserAnswer()}
        />
      );
    }
    return '';
  }
  render() {
    return (
      <div>
        <Head>
          <title>Troubleshooting Questionnaire</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="page">
          <div className="welcome-container">
            <WelcomeHeader
              shopName={this.state.shopName}
              advisorName={this.state.advisorName}
              customerName={this.state.customerName}
              appointmentDate={this.state.appointmentDate}
            />
            <IssueCategory
              categories={this.state.questionniare}
              onChange={e => this.setCategory(e.target.value)}
            />
          </div>
          <div className="main-container">
            {this.renderQuestion()}
            {this.renderSubmit()}
          </div>
        </div>
        <style jsx>{`
          .main-container {
            background-color: rgb(181, 186, 189);   
          }
          .page {
            background-color: rgb(181, 186, 189);
            color: #F5F5F5;
            font-size: 1.5vw;
            width: 100vw;   
            height: 100vh; 
          }
          .welcome-container {
            height: 60vh;
            width: 100vw;
            background: #495C70;    
            text-align: center;    
          }
          
          @media only screen and (max-width: 1400px) {
            .page {
              font-size: 1.75vw;
            }
          }
          @media only screen and (max-width: 900px) {
            .page {
              font-size: 2.0vw;
            }
          } 
          @media only screen and (max-width: 450px) {
            .page {
              font-size: 4.0vw;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default TroubleShootingQuestionnaire;

