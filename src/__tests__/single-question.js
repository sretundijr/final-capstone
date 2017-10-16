/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import SingleQuestion, { determineAnswerType } from '../components/questionaire/single-question';
import TextAnswer from '../components/questionaire/text-answer';
import MultipleChoice from '../components/questionaire/multiple-choice';

describe('testing single question component', () => {
  const question = {
    question: 'hello',
  };
  it('should render without crashing', () => {
    shallow(<SingleQuestion question={question} />);
  });
  describe('#determineAnswerType', () => {
    const userQuestionAndAnswer = {
      Question: 'Answer',
    };
    const questionObject = {
      question: 'Question',
      answer: [
        'yes',
        'no',
      ],
      multipleChoice: false,
    };
    const callback = jest.fn();
    it('should render a single answer text field', () => {
      const render = shallow(
        <div>
          {determineAnswerType(userQuestionAndAnswer, questionObject, callback)}
        </div>);
      expect(render.find(TextAnswer).length).toEqual(1);
    });
    it('should render a multi answer text field', () => {
      questionObject.multipleChoice = true;
      const render = shallow(
        <div>
          {determineAnswerType(userQuestionAndAnswer, questionObject, callback)}
        </div>);
      expect(render.find(MultipleChoice).length).toEqual(1);
    });
  });
});
