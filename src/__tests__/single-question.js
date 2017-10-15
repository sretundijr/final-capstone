/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import SingleQuestion from '../components/questionaire/single-question';

describe('testing single question component', () => {
  it('should render without crashing', () => {
    const question = {
      question: 'hello',
    };
    shallow(<SingleQuestion question={question} />);
  });
});
