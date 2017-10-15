
import React, { PropTypes } from 'react';
import Link from 'next/link';

// components
import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

// styles
import { flexContainer } from '../../styles/questionnaire/shared-styles';
import { questionPage } from '../../styles/questionnaire/troubleshooting-questionnaire';

export const determineAnswerType = (checked, questionObject, callback) => {
  // console.log(questionObject.multipleChoice);
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
      />
    </div>
  );
};

export default function SingleQuestion(props) {
  // console.log(props);
  return (
    <div key={0} className="flex-container">
      <div id={`question-${0}`} className="content-container component-container">
        <div>
          <h4>
            {props.question.question} 
          </h4>
        </div>
        <div>
          {determineAnswerType(props.checked, props.question, props.onChange)}
        </div>
        {props.renderBackButton}
        {props.renderNextButton}
        {props.renderSubmit}
      </div>
      <style jsx>{questionPage}</style>
      <style jsx>{flexContainer}</style>
    </div >
  );
}

// Question.defaultProps = {
//   questions: [],
// };

// // todo fix proptypes deprecation warning
// Question.propTypes = {
//   renderSubmit: PropTypes.func,
//   questions: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     question: PropTypes.string,
//     answer: PropTypes.arrayOf(PropTypes.string),
//     MultipleChoice: PropTypes.bool,
//   })),
// };
