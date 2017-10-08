/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import AdvisorDashboard from '../../pages/advisor-dashboard';

describe('testing advisor dashboard', () => {
  it('should render without crashing', () => {
    shallow(<AdvisorDashboard />);
  });
});
