/* global describe expect it jest */

import React from 'react';
import { shallow } from 'enzyme';

import TroubleshootingQuestionaire from '../../pages/troubleshooting-questionaire';

jest.mock('../mock-questionaire');
import MockQuestionaire from '../mock-questionaire';

const mockQuestionObject = () => MockQuestionaire
  .mockReturnValueOnce([{ issueType: 'foo', questions: ['hello'] }]);

describe('testing troubleshooting questionaire', () => {
  it('should render without crashing', () => {
    shallow(<TroubleshootingQuestionaire />);
  });

  const wrapper = shallow(<TroubleshootingQuestionaire />);

  describe('#setCategory', () => {
    it('modify state of property selected issue', () => {
      mockQuestionObject();
      wrapper.instance().setCategory('foo');
      expect(wrapper.state().selectedIssue).toEqual('foo');
    });

    it('modify the state of questions array', () => {
      mockQuestionObject();
      MockQuestionaire.mockReturnValueOnce([{ issueType: 'foo', questions: ['hello'] }]);
      wrapper.instance().setCategory('foo');
      expect(wrapper.state().questions).toEqual(['hello']);
    });
  });

  describe('#setUserAnswer', () => {
    it('modify the user input state', () => {
      wrapper.instance().setUserAnswer('Will this pass', 'yes');
      expect(wrapper.state().userInput).toEqual({ 'Will this pass': 'yes' });
    });

    it('should add multiple questions/answers and store input correctly', () => {
      const questions = ['Will this work', 'How about now', 'One more'];
      const answers = ['yes', 'of course', 'perfect'];
      questions.forEach((item, index) => {
        wrapper.instance().setUserAnswer(item, answers[index]);
      });
      expect(wrapper.state().userInput).toEqual({
        'Will this pass': 'yes',
        'Will this work': 'yes',
        'How about now': 'of course',
        'One more': 'perfect',
      });
    });
  });
});
