
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

// components
import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import SingleQuestion from '../src/components/questionaire/single-question';
import Submit from '../src/components/questionaire/submit';

// helpers
import MockQuestionnaire from '../src/mock-questionnaire';

// api
import { saveCompletedQuestionnaire } from '../src/api/questionnaire';

// styles
import { flexContainer } from '../src/styles/questionnaire/shared-styles';
import { questionPage } from '../src/styles/questionnaire/troubleshooting-questionnaire';


export class TroubleShootingQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIssue: '',
      questions: [],
      userInput: {},
      renderSubmit: false,
      questionsAnswered: 0,
      shopName: '',
      AdvisorName: '',
      appointmentDate: '',
      customerName: '',
      questionIndex: 0,
    };
    this.setUserAnswer = this.setUserAnswer.bind(this);
    this.incrementQuestionIndex = this.incrementQuestionIndex.bind(this);
    this.decrementQuestionIndex = this.decrementQuestionIndex.bind(this);
  }
  // async componentDidMount() {
  //   const headerData = await getShopAndCustomerData();
  //   this.setState({
  //     shopName: headerData.shopName,
  //     advisorName: headerData.advisorName,
  //     appointmentDate: headerData.appointmentDate,
  //     customerName: headerData.customerName,
  //   });
  // }
  setCategory(category) {
    const userSelectedQuestionType = MockQuestionnaire()
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
    saveCompletedQuestionnaire(this.state.userInput);
    Router.push('/thank-you');
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
        <style jsx>{questionPage}</style>
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
          <style jsx>{questionPage}</style>
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
        <div className="background">
          <div className="welcome-container">
            <WelcomeHeader
              shopName={this.state.shopName}
              advisorName={this.state.advisorName}
              customerName={this.state.customerName}
              appointmentDate={this.state.appointmentDate}
            />
            <IssueCategory
              categories={MockQuestionnaire()}
              onChange={e => this.setCategory(e.target.value)}
            />
          </div>
          <div className="main-container">
            {this.renderQuestion()}
            {this.renderSubmit()}
          </div>
        </div>
        <style jsx>{flexContainer}</style>
        <style jsx>{questionPage}</style>
      </div>
    );
  }
}

export default TroubleShootingQuestionnaire;

