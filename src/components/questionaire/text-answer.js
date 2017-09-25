import React, { PropTypes } from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';
import { textInput } from '../../styles/text-answer-styles';

export default function TextAnswer(props) {
  return (
    <div className="flex-container">
      <div className="content-container">
        <div>
          <textarea onChange={e => props.onChange(props.question, e.target.value)}
            className="text-input"
            id="single-answer"
            type="text"
          />
        </div>
      </div>
      <style jsx>{textInput}</style>
      <style jsx>{flexContainer}</style>
      <style jsx>{contentContainer}</style>
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