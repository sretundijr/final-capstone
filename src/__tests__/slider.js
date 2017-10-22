/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Slider from '../components/landing_page/slider';

describe('testing slider component', () => {
  it('should render without crashing', () => {
    shallow(<Slider />);
  });

  describe('#navEvent', () => {
    it('navOutput change, starts as "nav"', () => {
      const render = shallow(<Slider />);
      render.instance().navEvent();
      expect(render.state().navOutput).toEqual('nav-view');
    });
  });
  describe('#button click event', () => {
    const wrapper = shallow(<Slider />);
    it('should return nav-view', () => {
      wrapper.find('.menu button').simulate('click');
      expect(wrapper.state().navOutput).toEqual('nav-view');
    });
    it('should return nav', () => {
      wrapper.find('.menu button').simulate('click');
      expect(wrapper.state().navOutput).toEqual('nav');
    });
  });
  describe('click event on navigation container', () => {
    it('change state similar to the test above', () => {
      const wrapper = shallow(<Slider />);
      wrapper.find('.nav').simulate('click');
      expect(wrapper.state().navOutput).toEqual('nav-view');
    });
  });
});
