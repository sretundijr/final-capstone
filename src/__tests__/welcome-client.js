/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import WelcomeClient from '../components/questionaire/welcome-client';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<WelcomeClient />);
  });
});
