/* global describe it */

import React from 'react';
import { shallow, mount } from 'enzyme';

import TextInput from '../components/advisor/text-input';

describe('testing the text input component', () => {
  it('should render without crashing', () => {
    shallow(<TextInput />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      const callback = jest.fn();
      const fullRender = mount(<TextInput onChange={callback} />);
      fullRender.find('input[type="text"]').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });
});
