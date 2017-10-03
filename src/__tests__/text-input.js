/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../components/advisor/text-input';

describe('testing the text input component', () => {
  it('should render without crashing', () => {
    shallow(<TextInput />);
  });
});
