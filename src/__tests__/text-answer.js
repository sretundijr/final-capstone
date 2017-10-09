/* global describe it */

import React from 'react';
import { shallow, mount } from 'enzyme';

import TextAnswer from '../components/questionaire/text-answer';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<TextAnswer />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      const callback = jest.fn();
      const fullRender = mount(<TextAnswer onChange={callback} />);
      fullRender.find('textarea[type="text"]').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });
});
