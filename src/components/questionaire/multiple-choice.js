import React, { PropTypes } from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

// todo requires state change to control radio buttons
export default function MultipleChoice(props) {
  console.log(props);
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
        />
      </div>
    );
  });
  return (
    <div className="flex-container">
      <h6 className="content-container">
        {element}
      </h6>
      <style jsx>{contentContainer}</style>
      <style jsx>{flexContainer}</style>
    </div>
  );
}

// todo
MultipleChoice.propTypes = {
  onChange: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};
