import React from 'react';

import Questions from '../../mock-questionaire';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

// modify so props renders a single item as opposed to mapping through
// and only map through the list of answers
export default function (props) {
  const answers = Questions()[0].questions;
  const element = answers.map((item) => {
    return (
      <div>
        <label htmlFor="answer">{item.answer}</label>
        <input id="answer" type="checkbox" />
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
