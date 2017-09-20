import React, { PropTypes } from 'react';

// import Questions from '../../mock-questionaire';
import MultipleChoice from './multiple-choice';
import TextAnswer from './text-answer';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

const determineAnswerType = (questionObject) => {
  if (questionObject.multipleChoice) {
    return (
      <div>
        <MultipleChoice list={questionObject.answer} />
      </div>
    );
  }
  return (
    <div>
      <TextAnswer />
    </div>
  );
};

export default function question(props) {
  console.log(props);
  const questionElement = props.questions.map((item) => {
    return (
      <div key={item.id} className="flex-container">
        <div className="content-container">
          <h4>
            {item.question}
          </h4>
          {determineAnswerType(item)}
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
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
    MultipleChoice: PropTypes.bool,
  })),
};
