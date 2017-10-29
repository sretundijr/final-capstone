
/* global it describe */

import React from 'react';
import { shallow } from 'enzyme';

import EmailTech from '../components/advisor/email-tech';

describe('testing the email tech component', () => {
  it('should render without crashing', () => {
    shallow(<EmailTech />);
  });
});
