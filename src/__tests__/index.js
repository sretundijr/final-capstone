/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Index from '../../pages/index';

describe('testing index component', () => {
  it('should render without crashing', () => {
    shallow(<Index />);
  });
});
