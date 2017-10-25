
import React from 'react';
import PropTypes from 'prop-types';

import { flexContainer } from '../../styles/questionnaire/shared-styles';
import { radioInput, radioSpacing } from '../../styles/questionnaire/multiChoice-styles';

export default function MultipleChoice(props) {
  // console.log(props.checked);
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
        <style jsx>{radioSpacing}</style>
      </div>
    );
  });
  return (
    <div className="flex-container">
      <div>
        {element}
      </div>
      <style jsx>{radioInput}</style>
      <style jsx>{flexContainer}</style>
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
