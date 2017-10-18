/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Login from '../components/landing_page/login';

describe('testing login component', () => {
  it('should render without crashing', () => {
    shallow(<Login />);
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
