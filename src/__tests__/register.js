/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Register from '../components/advisor/register';

describe('testing Register component', () => {
  it('should render without crashing', () => {
    shallow(<Register />);
  });

  describe('#onChange', () => {
    it('simulate on change events', () => {
      // const callback = jest.fn();
      // const fullRender = mount(<TextAnswer onChange={callback} />);
      // fullRender.find('textarea[type="text"]').simulate('change');
      // expect(callback).toHaveBeenCalled();
    });
  });
});
