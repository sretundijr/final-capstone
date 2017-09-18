import React from 'react';
import Head from 'next/head';

import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import Questions from '../src/components/questionaire/question';
import MultipleChoice from '../src/components/questionaire/multiple-choice';

import MockQuestionaire from '../src/mock-questionaire';

export class TroubleShootingQuestionaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionType: this.questionaire,
      questionComponent: this.questionComponent,
      questions: this.questions,
    };
  }
  setCategory(e) {
    this.setState(() => {
      this.questionType = MockQuestionaire().filter(questions => e === questions.issueType);
      console.log(this.questionType[0]);
      this.questions = this.questionType[0].questions;
      if (this.questionType[0].MultipleChoice && this.questionType[0].multipleBranch) {
        this.questionComponent = <MultipleChoice />;
      }
    });
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
        <Questions questions={this.questions} />
        {/* <MultipleChoice /> */}
      </div>
    );
  }
}

TroubleShootingQuestionaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionaire;
// TroubleShootingQuestionaire.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };
