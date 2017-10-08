import React from 'react';
import Head from 'next/head';

// components
import WelcomeHeader from '../src/components/questionaire/welcome-client';
import IssueCategory from '../src/components/questionaire/issue-category';
import Questions from '../src/components/questionaire/question';
import Submit from '../src/components/questionaire/submit';

// helpers
import MockQuestionnaire from '../src/mock-questionnaire';

// styles
import { flexContainer } from '../src/styles/questionnaire/shared-styles';

export class TroubleShootingQuestionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIssue: '',
      questions: [],
      userInput: {},
      renderSubmit: false,
      questionsAnswered: 0,
    };
    this.setUserAnswer = this.setUserAnswer.bind(this);
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
        <WelcomeHeader />
        <IssueCategory
          categories={MockQuestionnaire()}
          onChange={e => this.setCategory(e.target.value)}
        />
        <Questions
          questions={this.state.questions}
          onChange={this.setUserAnswer}
          checked={this.state.userInput}
        />
        {this.renderSubmit()}
        <div>
          <footer className="footer" />
          <style jsx>{flexContainer}</style>
        </div>
      </div>
    );
  }
}

TroubleShootingQuestionnaire.defaultProps = {
  questions: [],
};

export default TroubleShootingQuestionnaire;

