
import React from 'react';
import PropTypes from 'prop-types';

export default function MultipleChoice(props) {
  const element = props.list.map((item) => {
    return (
      <div key={item}>
        <label htmlFor="answer">{item}</label>
        <input
          onChange={() => props.onChange(props.question, item)}
          id="answer"
          type="radio"
          value={item}
          checked={
            (props.checked.hasOwnProperty(props.question) &&
              props.checked[props.question] === item)
          }
          className="radio-spacing"
        />
        <style jsx>{`
          .radio-input { 
            margin-top: -5px;
          }
          .radio-spacing {
            margin: 10px;
          }
        `}</style>
      </div>
    );
  });
  return (
    <div className="flex-container">
      <div>
        {element}
      </div>
      <style jsx>{`
        .flex-container { 
          display: flex; 
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

MultipleChoice.defaultProps = {
  checked: {},
  list: [],
  question: '',
};

MultipleChoice.propTypes = {
  checked: PropTypes.objectOf(PropTypes.string),
  list: PropTypes.arrayOf(PropTypes.string),
  question: PropTypes.string,
};
