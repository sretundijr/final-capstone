/* global describe it */

import React from 'react';
import { shallow, mount } from 'enzyme';

import EmailInput from '../components/advisor/email-input';

describe('testing the email input component', () => {
  it('should render without crashing', () => {
    shallow(<EmailInput />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      const callback = jest.fn();
      const fullRender = mount(<EmailInput onChange={callback} />);
      fullRender.find('input[type="email"]').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });
});
