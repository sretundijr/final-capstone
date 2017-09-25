import React, { PropTypes } from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';
import { radioInput, radioSpacing } from '../../styles/multiChoice-styles';

// todo requires state change to control radio buttons
export default function MultipleChoice(props) {
  // console.log(props);
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
      <style jsx>{contentContainer}</style>
      <style jsx>{flexContainer}</style>
    </div>
  );
}

MultipleChoice.defaultProps = {
  list: [],
  question: '',
};

// todo
MultipleChoice.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  question: PropTypes.string,
};
