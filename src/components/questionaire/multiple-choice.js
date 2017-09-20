import React, { PropTypes } from 'react';

import Questions from '../../mock-questionaire';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

// todo requires state change to control radio buttons
export default function MultipleChoice(props) {
  const element = props.list.map((item) => {
    return (
      <div key={item}>
        <label htmlFor="answer">{item}</label>
        <input id="answer" type="radio" value="answer" />
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
  list: PropTypes.arrayOf(PropTypes.string),
};
