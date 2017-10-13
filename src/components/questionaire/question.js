import React, { PropTypes } from 'react';
import Link from 'next/link';

import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

import { flexContainer } from '../../styles/questionnaire/shared-styles';
import { questionPage } from '../../styles/questionnaire/troubleshooting-questionnaire';

const determineAnswerType = (checked, questionObject, callback) => {
  // console.log(questionObject);
  if (questionObject.multipleChoice) {
    return (
      <div>
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
    <div>
      <TextAnswer
        onChange={callback}
        question={questionObject.question}
      />
    </div>
  );
};

const iterateIndex = index => index + 1;

const decrementIndex = index => index - 1;

const renderBackButton = (index) => {
  if (index < 1) {
    return '';
  }
  return (
    <div>
      <Link href={`#question-${decrementIndex(index)}`}>
        <button className="next-btn">Back</button>
      </Link>
      <style jsx>{questionPage}</style>
    </div>
  );
};

export const renderNextButton = (index, listLength) => {
  if ((index + 1) === listLength) {
    return '';
  }
  return (
    <div>
      <Link href={`#question-${iterateIndex(index)}`}>
        <button className="next-btn">Next</button>
      </Link>
      <style jsx>{questionPage}</style>
    </div>
  );
};

export default function question(props) {
  console.log(props.checked);
  const questionElement = props.questions.map((item, index, arr) => {
    return (
      <div key={item.id} className="flex-container">
        <div id={`question-${index}`} className="content-container component-container">
          <div>
            <h4>
              {item.question}
            </h4>
          </div>
          <div>
            {determineAnswerType(props.checked, item, props.onChange)}
          </div>
          {renderBackButton(index)}
          {renderNextButton(index, arr.length)}
          {props.renderSubmit}
        </div>
        <style jsx>{questionPage}</style>
        <style jsx>{flexContainer}</style>
      </div >
    );
  });
  return (
    <div>
      {questionElement}
    </div>
  );
}

question.defaultProps = {
  questions: [],
};

// todo fix proptypes deprecation warning
question.propTypes = {
  renderSubmit: PropTypes.func,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
    MultipleChoice: PropTypes.bool,
  })),
};
