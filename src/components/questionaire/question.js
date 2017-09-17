import React from 'react';

import Questions from '../../mock-questionaire';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

export default function () {
  // pass the issue type through props and select correct array
  // for now just working on the rendering
  const questionElement = Questions()[0].questions.map((item) => {
    return (
      <h4 className="content-container">
        {item.question}
        <style jsx>{contentContainer}</style>
      </h4>
    );
  });
  return (
    <div className="flex-container">
      {questionElement}
      <style jsx>{flexContainer}</style>
    </div>
  );
}
