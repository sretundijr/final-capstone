/* global describe it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import Slider from '../components/landing_page/slider';

describe('testing slider component', () => {
  it('should render without crashing', () => {
    shallow(<Slider />);
  });
  it('should render 4 menu buttons', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper.find('ul li button').length).toEqual(3);
  });
  describe('#menu button click event', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Slider onClick={mockFn} />);
    it('should simulate click', () => {
      wrapper.find('.menu button').simulate('click');
      expect(mockFn).toHaveBeenCalled();
    });
    it('simulate click event in menu', () => {
      wrapper.find('ul li button').first().simulate('click');
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
