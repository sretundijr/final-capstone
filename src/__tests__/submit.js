/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Submit from '../components/questionaire/submit';

describe('testing submit component', () => {
  it('should render without crashing', () => {
    shallow(<Submit />);
  });
});