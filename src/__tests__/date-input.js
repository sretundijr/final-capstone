/* global describe it */

import React from 'react';
import { shallow, mount } from 'enzyme';

import DateInput from '../components/advisor/date-input';

describe('testing the date input component', () => {
  it('should render without crashing', () => {
    shallow(<DateInput />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      const callback = jest.fn();
      const fullRender = mount(<DateInput onChange={callback} />);
      fullRender.find('input[type="date"]').simulate('change');
      expect(callback).toHaveBeenCalled();
    });
  });
});
