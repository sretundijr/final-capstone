/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import DateInput from '../components/advisor/date-input';

describe('testing the date input component', () => {
  it('should render without crashing', () => {
    shallow(<DateInput />);
  });
});
