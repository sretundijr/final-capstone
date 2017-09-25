/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import MultipleChoice from '../components/questionaire/multiple-choice';

describe('test the multiple choice component', () => {
  it('should render without crashing', () => {
    shallow(<MultipleChoice />);
  });
});
