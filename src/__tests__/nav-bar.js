/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../components/advisor/nav-bar';

describe('testing submit component', () => {
  it('should render without crashing', () => {
    shallow(<NavBar />);
  });
});