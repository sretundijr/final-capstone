/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Home from '../components/landing_page/home';

describe('testing home component', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
