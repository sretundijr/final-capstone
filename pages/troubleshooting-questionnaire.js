import React from 'react';
import Head from 'next/head';

import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import Questions from '../src/components/questionaire/question';

import MockQuestionaire from '../src/mock-questionnaire';

import { footer } from '../src/styles/shared-styles';

export class TroubleShootingQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIssue: '',
      questions: [],
      userInput: {},
    };
    this.setUserAnswer = this.setUserAnswer.bind(this);
  }
  setCategory(category) {
    const userSelectedQuestionType = MockQuestionaire()
      .filter(questions => category === questions.issueType);
    this.setState({
      selectedIssue: category,
      questions: userSelectedQuestionType[0].questions,
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
  render() {
    // console.log(this.state.userInput);
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <WelcomeHeader />
        <IssueCategory categories={MockQuestionaire()} onChange={e => this.setCategory(e.target.value)} />
        <Questions
          questions={this.state.questions}
          onChange={this.setUserAnswer}
          checked={this.state.userInput}
        />
        <div>
          <footer className="footer" />
          <style jsx>{footer}</style>
        </div>
      </div>
    );
  }
}

TroubleShootingQuestionnaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionnaire;

