/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import EmailInput from '../components/advisor/email-input';

describe('testing the email input component', () => {
  it('should render without crashing', () => {
    shallow(<EmailInput />);
  });
});
