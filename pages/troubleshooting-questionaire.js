import React from 'react';
import Head from 'next/head';

import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import Questions from '../src/components/questionaire/question';

import MockQuestionaire from '../src/mock-questionaire';

export class TroubleShootingQuestionaire extends React.Component {
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
    console.log(input);
    this.setState((state) => {
      return {
        userInput: Object.assign({}, state.userInput, input),
      };
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <WelcomeHeader />
        <IssueCategory onChange={e => this.setCategory(e.target.value)} />
        <Questions
          questions={this.state.questions}
          onChange={this.setUserAnswer}
          checked={this.state.userInput}
        />
      </div>
    );
  }
}

TroubleShootingQuestionaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionaire;

