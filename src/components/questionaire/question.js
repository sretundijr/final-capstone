import React, { PropTypes } from 'react';

import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

const determineAnswerType = (questionObject, callback) => {
  // console.log(questionObject);
  if (questionObject.multipleChoice) {
    return (
      <div>
        <MultipleChoice
          question={questionObject.question}
          onChange={callback}
          list={questionObject.answer}
        />
      </div>
    );
  }
  return (
    <div>
      <TextAnswer onChange={callback} />
    </div>
  );
};

export default function question(props) {
  // console.log(props);
  const questionElement = props.questions.map((item) => {
    return (
      <div key={item.id} className="flex-container">
        <div className="content-container">
          <h4>
            {item.question}
          </h4>
          {determineAnswerType(item, props.onChange)}
        </div>
        <style jsx>{contentContainer}</style>
        <style jsx>{flexContainer}</style>
      </div>
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
  onChange: PropTypes.func,
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
    MultipleChoice: PropTypes.bool,
  })),
};
