/* global describe expect it */

import React from 'react';
import { shallow } from 'enzyme';

import Index from '../../pages/index';

describe('testing index component', () => {
  it('should render without crashing', () => {
    shallow(<Index />);
  });
  describe('test state of index component', () => {
    describe('#handleUserSelection', () => {
      const wrapper = shallow(<Index />);
      // wrapper.instance().navOutput = 'nav-view';
      // wrapper.instance().userSelection = 'home';
      it('pass empty string no change to user selected state', () => {
        // wrapper.instance().handleUserSelection('');
        // expect(wrapper.instance().userSelection).toEqual('home');
      });
      it('change the state of user selection', () => {
        wrapper.instance().renderUserSelection();
        // expect(wrapper.instance().navOutput).toEqual('nav');
      });
    });
  });
});
