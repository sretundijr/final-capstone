/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Contact from '../components/landing_page/contact';

describe('testing home component', () => {
  it('should render without crashing', () => {
    shallow(<Contact />);
  });
});
