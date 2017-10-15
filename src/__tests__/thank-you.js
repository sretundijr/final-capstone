/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import ThankYou from '../../pages/thank-you';

describe('testing Thank you component', () => {
  it('should render without crashing', () => {
    shallow(<ThankYou />);
  });
});
