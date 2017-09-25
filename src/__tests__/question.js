/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Question from '../components/questionaire/question';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<Question />);
  });
});
