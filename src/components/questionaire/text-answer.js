import React, { PropTypes } from 'react';

import { flexContainer } from '../../styles/questionnaire/shared-styles';
import { textInput } from '../../styles/questionnaire/text-answer-styles';

export default function TextAnswer(props) {
  console.log(props.value)
  return (
    <div className="flex-container">
      <div className="content-container">
        <div>
          <textarea onChange={e => props.onChange(props.question, e.target.value)}
            className="text-input"
            id="single-answer"
            type="text"
            value={props.value}
          />
        </div>
      </div>
      <style jsx>{textInput}</style>
      <style jsx>{flexContainer}</style>
    </div>
  );
}

TextAnswer.defaultProps = {
  question: '',
  onChange: () => { },
};

TextAnswer.propTypes = {
  onChange: PropTypes.func,
  question: PropTypes.string,
};
