
import React from 'react';
import PropTypes from 'prop-types';

// components
import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

export const determineAnswerType = (checked, questionObject, callback, value) => {
  if (questionObject.multipleChoice) {
    return (
      <div className="multi-choice-container">
        <MultipleChoice
          question={questionObject.question}
          onChange={callback}
          list={questionObject.answer}
          checked={checked}
        />
      </div>
    );
  }
  return (
    <div className="single-choice-container">
      <TextAnswer
        onChange={callback}
        question={questionObject.question}
        value={value}
      />
    </div>
  );
};

export default function SingleQuestion(props) {
  return (
    <div key={0} className="flex-container">
      <div id={`question-${0}`} className="content-container component-container">
        <div>
          <h5>{`Question ${props.currentQuestion} of ${props.numberOfQuestions}`}</h5>
          <h4>
            {props.question.question}
          </h4>
        </div>
        <div>
          {determineAnswerType(props.checked, props.question, props.onChange, props.value)}
        </div>
        {props.renderBackButton}
        {props.renderNextButton}
        {props.renderSubmit}
      </div>
      <style jsx>{`
        .flex-container { 
          display: flex; 
          justify-content: center;
        }
        .content-container
        {
          text-align: center;
          max-width: 100%;
          width: 600px;
          height: 65vh;
          background: #495C70;
          margin-top: 10px;
          margin-bottom: 150px;
        }
        @media only screen and (max-width: 1400px) {
          .component-container {
            width: 100vw;
            background: #495C70;
            margin-top: 10px;
            margin-bottom: 50px;
            padding: 50px;
          }
        }
        @media only screen and (max-width: 900px) {
          .content-container {
            width: 100vw;
            background: #495C70;
            margin-top: 10px;
            margin-bottom: 50px;
            padding: 50px;
          }
        }
        @media only screen and (max-width: 450px) {
          .content-container {
            width: 100vw;
            background: #495C70;
            margin-top: 10px;
            margin-bottom: 50px;
            padding: 50px;
          }
        }
      `}</style>
    </div >
  );
}

SingleQuestion.defaultProps = {
  currentQuestion: 0,
  numberOfQuestions: 0,
  question: {},
  checked: {},
  onChange: () => { },
  value: '',
  renderBackButton: '',
  renderNextButton: '',
  renderSubmit: '',
};

SingleQuestion.propTypes = {
  currentQuestion: PropTypes.number,
  numberOfQuestions: PropTypes.number,
  question: PropTypes.objectOf(PropTypes.shape({
    question: PropTypes.string,
    id: PropTypes.number,
    answer: PropTypes.arrayOf(PropTypes.string),
    multipleChoice: PropTypes.bool,
  })),
  checked: PropTypes.objectOf(PropTypes.object),
  onChange: PropTypes.func,
  value: PropTypes.string,
  renderBackButton: PropTypes.string,
  renderNextButton: PropTypes.string,
  renderSubmit: PropTypes.string,
};
