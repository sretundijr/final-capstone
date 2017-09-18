import React from 'react';

// import Questions from '../../mock-questionaire';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

export default function question(props) {
  // pass the issue type through props and select correct array
  // for now just working on the rendering
  // console.log(props);
  const questionElement = props.questions.map((item) => {
    return (
      <div className="flex-container">
        <h4 className="content-container">
          {item.question}
        </h4>
        <style jsx>{contentContainer}</style>
        <style jsx>{flexContainer}</style>
      </div>
    );
  });
  return (
    <div>
      {questionElement}
    </div>
  );
}

question.defaultProps = {
  questions: [],
};
