/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import PasswordInput from '../components/advisor/password-input';

describe('testing password input component', () => {
  it('should render without crashing', () => {
    shallow(<PasswordInput />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      // const callback = jest.fn();
      // const fullRender = mount(<PasswordInput onChange={callback} />);
      // fullRender.find('input[type="password"]').simulate('change');
      // expect(callback).toHaveBeenCalled();
    });
  });
});
