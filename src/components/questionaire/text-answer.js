
import React from 'react';
import PropTypes from 'prop-types';

export default function TextAnswer(props) {
  // console.log(props.value);
  return (
    <div className="flex-container">
      <div className="content-container">
        <div>
          <textarea
            onChange={e => props.onChange(props.question, e.target.value)}
            className="text-input"
            id="single-answer"
            type="text"
            value={props.value}
          />
        </div>
      </div>
      <style jsx>{`
        .text-input { 
          margin-top: 5px;
          width: 300px;
          height: 150px;
        }
      `}</style>
    </div>
  );
}

TextAnswer.defaultProps = {
  value: '',
  onChange: () => { },
  question: '',
};

TextAnswer.propTypes = {
  question: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
