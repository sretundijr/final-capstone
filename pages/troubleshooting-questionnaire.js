import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// components
import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import Questions from '../src/components/questionaire/question';
import Submit from '../src/components/questionaire/submit';

// helpers
import MockQuestionnaire from '../src/mock-questionnaire';

// api
import { getShopAndCustomerData } from '../src/api/questionnaire';

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
    };
    this.setUserAnswer = this.setUserAnswer.bind(this);
  }
  async componentDidMount() {
    const headerData = await getShopAndCustomerData();
    this.setState({
      shopName: headerData.shopName,
      advisorName: headerData.advisorName,
      appointmentDate: headerData.appointmentDate,
      customerName: headerData.customerName,
    });
  }
  setCategory(category) {
    const userSelectedQuestionType = MockQuestionnaire()
      .filter(questions => category === questions.issueType);
    this.setState({
      selectedIssue: category,
      questions: userSelectedQuestionType[0].questions,
      renderSubmit: true,
    });
  }
  setUserAnswer(question, answer) {
    const input = {};
    input[question] = answer;
    this.setState((state) => {
      return {
        userInput: Object.assign({}, state.userInput, input),
      };
    });
  }
  renderStartButton() {
    if (this.state.selectedIssue) {
      return (
        <div className="flex-container">
          <Link href="#question-0">
            <button className="start-btn">Start</button>
          </Link>
          <style jsx>{flexContainer}</style>
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
        <Submit onClick={{}} />
      );
    }
    return '';
  }
  render() {
    // console.log(this.state);
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
            {this.renderStartButton()}
          </div>
          <div className="main-container">
            <Questions
              questions={this.state.questions}
              onChange={this.setUserAnswer}
              checked={this.state.userInput}
              renderSubmit={this.renderSubmit()}
            />
          </div>
        </div>
        <style jsx>{flexContainer}</style>
        <style jsx>{questionPage}</style>
      </div>
    );
  }
}

TroubleShootingQuestionnaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionnaire;

