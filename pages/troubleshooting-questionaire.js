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
      questionType: this.questionaire,
      questions: this.questions,

    };
  }
  setCategory(category) {
    this.setState(() => {
      this.questionType = MockQuestionaire().filter(questions => category === questions.issueType);
      this.questions = this.questionType[0].questions;
    });
  }
  setUserAnswer(answer) {

  }
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <WelcomeHeader />
        <IssueCategory onChange={e => this.setCategory(e.target.value)} />
        <Questions
          questions={this.questions}
          onChange={e => this.setUserAnswer(e.target.value)}
        />
      </div>
    );
  }
}

TroubleShootingQuestionaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionaire;

