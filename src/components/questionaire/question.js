import React, { PropTypes } from 'react';

import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

import { flexContainer } from '../../styles/questionnaire/shared-styles';

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

export default function question(props) {
  // console.log(props);
  const questionElement = props.questions.map((item) => {
    return (
      <div key={item.id} className="flex-container">
        <div className="content-container">
          <div>
            <h4>
              {item.question}
            </h4>
          </div>
          <div>
            {determineAnswerType(props.checked, item, props.onChange)}
          </div>
        </div>
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
