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
  describe('#setCategory', () => {
    it('modify state of property selected issue', () => {
      mockQuestionObject();
      const wrapper = shallow(<TroubleshootingQuestionaire />);
      wrapper.instance().setCategory('foo');
      expect(wrapper.state().selectedIssue).toEqual('foo');
    });

    it('modify the state of questions array', () => {
      mockQuestionObject();
      MockQuestionaire.mockReturnValueOnce([{ issueType: 'foo', questions: ['hello'] }]);
      const wrapper = shallow(<TroubleshootingQuestionaire />);
      wrapper.instance().setCategory('foo');
      expect(wrapper.state().questions).toEqual(['hello']);
    });
  });
});
