import React from 'react';
import { shallow } from 'enzyme';

import TroubleshootingQuestionaire from '../../pages/troubleshooting-questionaire';

describe('testing troubleshooting questionaire', () => {
  it('should render without crashing', () => {
    shallow(<TroubleshootingQuestionaire />);
  });
  describe('#setCategory', () => {
    it('modify state of property selected issue', () => {
      const wrapper = shallow(<TroubleshootingQuestionaire />);
      wrapper.instance().setCategory('check engine light on');
      expect(wrapper.state().selectedIssue).toEqual('check engine light on');
    });

    it('modify the state of questions array', () => {
      const wrapper = shallow(<TroubleshootingQuestionaire />);
      wrapper.instance().questions
    });
  });
});
