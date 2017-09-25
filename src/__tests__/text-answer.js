/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import TextAnswer from '../components/questionaire/text-answer';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<TextAnswer />);
  });
});
