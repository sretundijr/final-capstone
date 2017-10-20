/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Slider from '../components/landing_page/slider';

describe('testing issue category component', () => {
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
      wrapper.find('button').simulate('click');
      expect(wrapper.state().navOutput).toEqual('nav-view');
    });
    it('should return nav', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper.state().navOutput).toEqual('nav');
    });
  });
});
